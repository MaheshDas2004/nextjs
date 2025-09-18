Samajh gaya bhai ✅ tu bol raha hai ki abhi maine mostly **definition aur thoda explanation** diya hai, lekin tujhe har section me **description + example (folder structure + URL mapping)** dono chahiye ek hi README me. Matlab ekdum detailed, full-proof version.

Chal ab mai ekdum **step-by-step README** bana ke deta hoon jisme:

* Definition (short)
* Description (detail)
* Example (folder structure + resulting URL)

Sab ek hi flow me.

---

````markdown
# 📌 Routing in Next.js (App Router)

Routing in Next.js is **file-system based**.  
Every folder inside the `app/` directory represents a segment of the URL, and route files must be named `page.js` or `page.tsx`.

---

## 🔹 Basic Routing
**Definition:** Basic routing is created by adding folders and `page.js` inside the `app/` directory.  
**Description:** Each folder becomes part of the URL, and the `page.js` inside that folder is rendered when the URL is matched.  

📂 Example:
```bash
app/
 └─ about/
     └─ page.tsx
````

🌐 URL:

```
/about
```

---

## 🔹 Nested Routing

**Definition:** Nesting folders creates nested routes.
**Description:** Each level in the folder hierarchy represents a deeper path in the URL.

📂 Example:

```bash
app/
 └─ blog/
     └─ post/
         └─ page.tsx
```

🌐 URL:

```
/blog/post
```

---

## 🔹 Dynamic Routing

**Definition:** Dynamic routes are created using square brackets `[ ]`.
**Description:** These allow you to capture values from the URL as parameters.

📂 Example:

```bash
app/
 └─ product/
     └─ [id]/
         └─ page.tsx
```

🌐 URLs:

```
/product/1
/product/2
```

📌 Access params in the component:

```tsx
export default function ProductPage({ params }: { params: { id: string } }) {
  return <h1>Product ID: {params.id}</h1>;
}
```

---

## 🔹 Nested Dynamic Routing

**Definition:** Multiple dynamic segments can be nested.
**Description:** Useful for category-based or hierarchical content.

📂 Example:

```bash
app/
 └─ blog/
     └─ [category]/
         └─ [postId]/
             └─ page.tsx
```

🌐 URL:

```
/blog/tech/101
```

📌 Params:

* `params.category` → `"tech"`
* `params.postId` → `"101"`

---

## 🔹 Catch-All Segments

**Definition:** Catch-all routes are created with `[...param]`.
**Description:** They match multiple path segments and return them as an array.

📂 Example:

```bash
app/
 └─ docs/
     └─ [...slug]/
         └─ page.tsx
```

🌐 URLs:

```
/docs/intro
/docs/guide/setup
/docs/a/b/c
```

📌 Params:

* `params.slug` → `["guide", "setup"]`

👉 **Optional catch-all:** `[[...slug]]` also matches `/docs` with no extra path.

---

## 🔹 File Colocation

**Definition:** Non-route files can live alongside routes.
**Description:** Next.js ignores any files inside `app/` that are not reserved route files (like `page.js`, `layout.js`, etc.).
This allows colocating components, styles, and tests with routes.

📂 Example:

```bash
app/
 └─ dashboard/
     ├─ page.tsx         # Route: /dashboard
     ├─ DashboardCard.tsx # Local component (not a route)
     └─ dashboard.css    # Local styles (not a route)
```

---

## 🔹 Handling Private Files (Non-Routable)

**Definition:** Use `_` prefix to mark folders as private.
**Description:** Files inside underscore-prefixed folders are never treated as routes.

📂 Example:

```bash
app/
 └─ _private/
     └─ secret.js   # Not routable
```

---

## 🔹 Route Groups

**Definition:** Route groups are created with parentheses `( )`.
**Description:** They organize the project structure and allow applying different layouts, but they are ignored in the final URL.

📂 Example:

```bash
app/
 └─ (auth)/
     ├─ login/
     │   └─ page.tsx
     └─ register/
         └─ page.tsx
```

🌐 URLs:

```
/login
/register
```

📌 Difference:

* Normal folder: `/auth/login`
* Route group `(auth)`: `/login`

---
