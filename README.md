<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="85" alt="Devopstrio Logo" />

<h1>Architecture Blueprints Platform</h1>

<p><strong>The Enterprise Architecture Catalog: Design Once, Govern Everywhere, Deploy Anywhere</strong></p>

[![Architecture](https://img.shields.io/badge/Catalog-Ref_Architectures-522c72?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Cloud](https://img.shields.io/badge/Platform-Multi_Cloud-0078d4?style=for-the-badge&logo=microsoftazure&labelColor=000000)](/terraform)
[![FinOps](https://img.shields.io/badge/Engine-Cost_Estimation-962964?style=for-the-badge&labelColor=000000)](/apps/cost-engine)
[![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)

</div>

---

## 🏛️ Executive Summary

![Architecture Blueprints Layout](assets/diagram-architecture.png)

The **Architecture Blueprints Platform** is the centralized, vetted, and secure source of truth for all foundational enterprise solutions. Rather than reinventing cloud networking, Kubernetes perimeters, and MLOps platforms from scratch, architects download certified, cost-evaluated Infrastructure-as-Code (IaC) bundles ready for immediate deployment.

### Strategic Business Outcomes
- **Standardized Landing Zones**: Enforces security-by-default logic across Azure, AWS, and GCP.
- **Automated Diagram Generation**: Transforms abstract parameter selections into high-fidelity Mermaid/SVG topology maps dynamically.
- **FinOps Cost TCO Modeling**: Every blueprint bundle generates accurate monthly cost profiles based on region, SKU selection, and bandwidth estimates *before* infrastructure is created.
- **Zero-Trust Governance**: Ensures every downloaded terraform bundle natively includes WAFs, Private Endpoints, and strictly scoped RBAC boundaries.

---

## 🏗️ Technical Architecture Details

### 1. High-Level Architecture
```mermaid
graph TD
    UI[Web Portal Next.js] --> API[FastAPI Gateway]
    API --> Catalog[Catalog Service]
    API --> Cost[Cost Engine]
    API --> Diagram[Diagram Engine]
    Catalog --> DB[(PostgreSQL Catalog)]
    Cost --> AzureRes[Azure Retail Prices API]
    Diagram --> Ex[SVG / PNG Generator]
```

### 2. Blueprint Downloading Workflow
```mermaid
sequenceDiagram
    participant Architect
    participant Portal
    participant Blueprint Engine
    participant GitHub
    
    Architect->>Portal: Select `AKS Prod Foundation`
    Portal->>Blueprint Engine: Request Generation (Params: HA=True)
    Blueprint Engine->>Blueprint Engine: Inject Security Baselines
    Blueprint Engine->>GitHub: Fork Template to Team Repo
    Blueprint Engine-->>Portal: Provide Download Zip / PR Link
```

### 3. Cost Estimation Flow
```mermaid
graph LR
    Input[Blueprint Parameters] --> Engine[Cost Engine]
    Engine --> Azure[Azure Pricing API]
    Azure --> Engine
    Engine --> Compute[Compute Nodes $]
    Engine --> Net[Egress Traffic $]
    Compute --> Agg[Total Monthly TCO]
    Net --> Agg
```

### 4. Governance Validation Flow
```mermaid
graph TD
    Bundle[Generated IaC Bundle] --> Engine[Governance Engine]
    Engine --> Naming[Validate Naming Conventions]
    Engine --> Regions[Block Non-Approved Regions]
    Naming --> Approved[Finalize Bundle]
    Regions --> Approved
```

### 5. Multi-Tenant Reference Catalog
```mermaid
graph TD
    Catalog --> Domain1[Data Platforms]
    Catalog --> Domain2[Zero-Trust Networking]
    Catalog --> Domain3[AI & MLOps]
    Domain1 --> Lake[Databricks Lakehouse Blueprint]
    Domain2 --> VNet[Hub & Spoke Blueprint]
    Domain3 --> AI[AI Landing Zone Blueprint]
```

### 6. Security Trust Boundary
```mermaid
graph TD
    Internet --> WAF[Azure WAF]
    WAF --> AKS[Portal Workloads]
    AKS --> Entra[Azure AD Auth / RBAC]
    Entra --> API[Catalog Core API]
    API --> SQL[(Metadata Catalog)]
```

### 7. Core Workload Topology (AKS)
```mermaid
graph TD
    subgraph Blueprint_Architecture
        NextJS[Portal UI]
        FastAPI[Central Backend]
        Generators[PDF & Diagram Export Workers]
    end
    FastAPI --> Generators
    Generators --> Disk[(Blob Storage Cache)]
```

### 8. Download Package Lifecycle
```mermaid
graph LR
    Select[User Configures Pattern] --> Zip[Blueprint Engine creates .ZIP]
    Zip --> Hash[Generate SHA256 Checksum]
    Hash --> DL[Serve to End-User via Signed URL]
```

---

## 🛠️ Global Platform Components

| Engine | Directory | Purpose |
|:---|:---|:---|
| **Portal UI** | `apps/portal/` | The Next.js Executive Catalog, displaying architectures and prices. |
| **Platform API** | `backend/src/` | Centralized router governing all downloads and catalog searches. |
| **Blueprint Engine** | `apps/blueprint-engine/`| Generates customized Terraform/Bicep from parameterized templates. |
| **Cost Engine** | `apps/cost-engine/` | Interacts with external pricing APIs to calculate infrastructure TCO. |
| **Diagram Engine** | `apps/diagram-engine/` | Automatically draws system architectures based on user selections. |

---

## 🚀 Environment Deployment

Provision the catalog framework.

```bash
cd bicep
az deployment sub create --name blueprints-platform --location uksouth --template-file main.bicep
```

---
<sub>&copy; 2026 Devopstrio &mdash; Architecting the Enterprise.</sub>
