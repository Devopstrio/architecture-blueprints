// Devopstrio Architecture Blueprints
// Central Catalog Operations Infrastructure

targetScope = 'subscription'

param location string = 'uksouth'
param prefix string = 'bp-catalog'
param env string = 'prd'

resource rgPlatform 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'rg-${prefix}-platform-${env}'
  location: location
  tags: {
    Purpose: 'Enterprise Reference Architecture Catalog Hosting'
  }
}

// 1. Scalable Blob Storage for generated architecture bundles
module storage './modules/storage.bicep' = {
  scope: rgPlatform
  name: 'storageDeploy'
  params: {
    location: location
    accountName: 'st${prefix}bundles${env}'
  }
}

// 2. Metadata Catalog (PostgreSQL)
module psql './modules/postgres.bicep' = {
  scope: rgPlatform
  name: 'postgresDeploy'
  params: {
    location: location
    serverName: 'psql-${prefix}-meta-${env}'
  }
}

// 3. Central Web Application Hosting for Next.js and FastAPI
module appHosting './modules/aks.bicep' = {
  scope: rgPlatform
  name: 'k8sDeploy'
  params: {
    location: location
    clusterName: 'aks-${prefix}-host-${env}'
  }
}

output storageEndpointUri string = storage.outputs.blobEndpoint
output catalogPortalUrl string = appHosting.outputs.portalFqdn
