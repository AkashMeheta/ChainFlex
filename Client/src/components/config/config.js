const config = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
    
}

export default config;

// appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
//     rteapikey: String(import.meta.env.VITE_RTE_API_KEY),