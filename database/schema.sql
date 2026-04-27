-- Devopstrio Architecture Blueprints Platform
-- Core Catalog and Reporting Metadata Schema
-- Target: PostgreSQL 14+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Organizational Mapping
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'Architect', -- Admin, CTO, Architect, Developer
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Blueprint Catalog Domain
CREATE TABLE IF NOT EXISTS catalog_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    short_description TEXT NOT NULL,
    domain VARCHAR(100) NOT NULL, -- e.g., 'Cloud Landing Zones', 'AI Platforms'
    complexity_level VARCHAR(50) DEFAULT 'Medium', -- Low, Medium, High
    is_featured BOOLEAN DEFAULT false,
    author_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blueprint_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    catalog_item_id UUID REFERENCES catalog_items(id) ON DELETE CASCADE,
    version_tag VARCHAR(50) NOT NULL, -- e.g., 'v1.4.0'
    release_notes TEXT,
    base_cost_estimate_usd DECIMAL(10, 2), -- Computed via Cost Engine dynamically
    iac_template_path VARCHAR(512) NOT NULL, -- Blob storage reference to ZIP/Repo
    status VARCHAR(50) DEFAULT 'Active', -- Active, Deprecated, Draft
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- End-User Tracking
CREATE TABLE IF NOT EXISTS downloads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    blueprint_version_id UUID REFERENCES blueprint_versions(id),
    parameters_used JSONB, -- The custom configuration they specified
    target_environment VARCHAR(50), -- Dev, Prod
    downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- FinOps Cost Estimations
CREATE TABLE IF NOT EXISTS cost_estimates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    blueprint_version_id UUID REFERENCES blueprint_versions(id),
    custom_parameters JSONB NOT NULL,
    monthly_compute_estimated DECIMAL(10, 2),
    monthly_network_estimated DECIMAL(10, 2),
    total_monthly_usd DECIMAL(10, 2),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for rapid portal rendering
CREATE INDEX idx_catalog_domain ON catalog_items(domain);
CREATE INDEX idx_blueprint_version ON blueprint_versions(catalog_item_id, status);
CREATE INDEX idx_downloads_tracking ON downloads(blueprint_version_id);
