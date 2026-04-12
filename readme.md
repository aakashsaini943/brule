JFROG_USERNAME
JFROG_PASSWORD   ← Access Token (IMPORTANT 🔥)
JFROG_REGISTRY   ← example: trialxxxx.jfrog.io
KUBE_CONFIG      ← base64 encoded kubeconfig



🔥 What You Achieved (Important)

👉 This pipeline now does:

Code Push
↓
Auto Version Generate (v123456)
↓
Docker Build
↓
Push to JFrog
↓
Deploy to Kubernetes
↓
Rolling Update (Zero Downtime)
↓
Verify rollout