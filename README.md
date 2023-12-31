# React + TypeScript + Vite

 axios.get("https://randomuser.me/api/?results=100")

           dat?.map((item,index)=>(
            <div style={{background: index %2 === 0 ?"white" : "blue"}} key={index}>
              <div> {Object.values(item.name)} </div>
           
            
             <div> {item.email} </div>
             <div> {item.registered.age} </div>
             
            
            </div>
           ))
          



emploList
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```