# AKD-STUDIO-APP ← PROJECT STRUCTURE (FULL TREE)

```
akd-studio-app/
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
│
├── middleware/
│   └── auth.js
│
├── routes/
│   └── index.js
│
├── apps/                        ← Development source apps
│   ├── akd-studio/              ← Main app
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   ├── index.css
│   │   │   └── components/...
│   │   └── ...
│   │
│   ├── login-app/
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   ├── main.tsx
│   │   │   └── components/...
│   │   └── ...
│   │
│   ├── chat-app/
│   │   ├── index.html
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── index.css
│   │   │   └── components/
│   │   └── ...
│   │
│   └── console-app/      ← Admin panel
│       ├── index.html
│       ├── src/
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── components/
│       └── ...
│
├── builds/               ← Only production builds
│   ├── akd-studio/
│   ├── login-app/
│   ├── chat-app/
│   └── console-app/
│
└── .gitignore
```

# Tech Stack
	Node 20.19.x
	•	Vite 8
	•	React 18.3.x (TypeScript)
	•	Pure TailwindCSS

