## Neosiat Starter

### Standard Project Layout

```
  docs -------------> berisi cattan dan dokumentasi proyek
  src -----------------> Sources
    | app -------------> Routes
    |  | _internal ----> Client (current route usage): files, components, layout, ui logic, ui component
    |  |    | components
    |  |    | hooks
    |  |    | lib
    |  |    | providers
    |  |    | usecases
    |  |    | utils
    |  |    | forms
    |  | layout.tsx ----> Layout (optional)
    |  | page.tsx ------> Route Page (Wajib)
    | main -------------> Client (Global Usage): files, components, layout, ui lojik, ui component
    |  | components ----> components
    |  | hooks ---------> hooks
    |  | lib
    |  | providers -----> Context, provider, global state
    |  | usecases ------> client logic
    |  | utils -----> Utilitas untuk shadcnui
    | modules -----------------> berisi funsi atau library untuk server rendering
    |  | services ---> bersisi repostory atau service atau model
    |  | models
    | 
    | middleware.ts
```

### Keterangan selanjutnya bisa dibaca pada docs/manual-book.md

Gunakan nodejs v18 LTS

### Cara install

```sh
npx create-next-app@latest nama-aplikasi --use-npm -e https://github.com/Pustikom-UNG/neosiat-mahasiswa
# masuk ke direktori aplikasi
cd nama-aplikasi
npm run dev
```

### Generate auth secret

Ada pada pada file

**.env.local**

```
# https://next-auth.js.org/configuration/options
# Linux: `openssl rand -hex 32` or go to https://generate-secret.vercel.app/32
AUTH_SECRET=
```
