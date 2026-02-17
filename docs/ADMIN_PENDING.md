# Admin Path & Components — Pending Documentation

This document describes the admin section of the Champagne web application, including routes, components, and work that is still pending or incomplete.

---

## Admin Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/admin` | (Layout) | Admin section root — redirects to dashboard or login |
| `/admin/login` | `Login.jsx` | Admin authentication page |
| `/admin/dashboard` | `Dashboard.jsx` | Admin dashboard (also `/admin` index) |
| `/admin/products` | `ProductsManager.jsx` | Product CRUD management |
| `/admin/events` | `EventsManager.jsx` | Event CRUD management |

**Note:** Routes `/admin/events/new` and `/admin/products/new` are referenced in Quick Actions but may not have dedicated route handlers.

---

## Admin-Related Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `AuthContext` | `src/context/AuthContext.jsx` | Manages admin auth state (login/logout, token, user) |
| `AuthProvider` | `src/context/AuthContext.jsx` | Wraps app with auth context |
| `ProtectedRoute` | `src/components/admin/ProtectedRoute.jsx` | Guards admin routes; redirects to login if unauthenticated |
| `AdminLayout` | `src/components/admin/AdminLayout.jsx` | Sidebar + main content layout for admin pages |
| `Login` | `src/pages/admin/Login.jsx` | Login form |
| `Dashboard` | `src/pages/admin/Dashboard.jsx` | Dashboard with stats and quick actions |
| `ProductsManager` | `src/pages/admin/ProductsManager.jsx` | Product list, add/edit/delete UI |
| `EventsManager` | `src/pages/admin/EventsManager.jsx` | Event list, add/edit/delete UI |
| `AddProduct` | `src/components/Product/Addproduct.jsx` | Modal form for adding new products |

---

## Pending / Incomplete Items

### 1. Authentication (Login.jsx)

- **Hardcoded credentials:** Username `admin` and password `admin123` are checked in code.
- **No backend:** No API call; credentials are validated client-side only.
- **Demo token:** Uses a static `demo-token` instead of a real JWT or session token.

**TODO:** Replace with real authentication (backend API, JWT, etc.).

---

### 2. Token & Session Management (AuthContext.jsx)

- **No token validation:** Only checks presence of `adminToken` in `localStorage`.
- **No expiry:** Tokens never expire.
- **No refresh:** No refresh or revocation logic.

**TODO:** Add token validation, expiry, and refresh/revoke handling.

---

### 3. Dashboard (Dashboard.jsx)

- **Static stats:** `totalEvents` and `totalProducts` are always 0.
- **No data source:** Stats are not loaded from API or state.
- **Quick Actions:** Uses `window.location.href` instead of React Router `navigate()`.
- **Missing routes:** `/admin/events/new` and `/admin/products/new` may not exist.

**TODO:** Connect stats to real data; use `useNavigate`; add or adjust routes for new event/product.

---

### 4. Products Manager (ProductsManager.jsx)

- **Add Product:** Works in local state only; no persistence (API/database).
- **Edit Product:** `handleEditProduct` only logs to console; no edit UI or logic.
- **Delete Product:** `handleDeleteProduct` only logs to console; no deletion logic.
- **Product editor:** `product-editor` div is empty when `selectedProduct` is set.

**TODO:** Implement edit form, delete confirmation, and backend persistence.

---

### 5. Events Manager (EventsManager.jsx)

- **Add Event:** `handleAddEvent` only logs to console.
- **Edit Event:** `handleEditEvent` only logs to console; no edit UI.
- **Delete Event:** `handleDeleteEvent` only logs to console.
- **Event editor:** `event-editor` div is empty when `selectedEvent` is set.
- **No add-event form:** No modal or form component for creating events.

**TODO:** Implement add/edit/delete and backend persistence.

---

### 6. Admin Layout (AdminLayout.jsx)

- **Mobile sidebar:** `admin.css` defines `.admin-sidebar.active` for mobile, but there is no toggle to add/remove `.active`.
- **Mobile menu toggle:** `.mobile-menu-toggle` exists in CSS but is not rendered in `AdminLayout`.

**TODO:** Add mobile menu toggle and wire it to sidebar visibility.

---

### 7. AddProduct Component (Addproduct.jsx)

- **Filename:** Uses `Addproduct.jsx` (lowercase `p`); consider `AddProduct.jsx` for consistency.
- **Integration:** Form submits to `ProductsManager` local state only; no API integration.

**TODO:** Connect to backend API for persistence.

---

## Summary: Admin Work Remaining

| Area | Status | Priority |
|------|--------|----------|
| Replace hardcoded login credentials | Pending | High |
| Token validation & expiry | Pending | High |
| Dashboard stats from real data | Pending | Medium |
| Products Manager: Edit, Delete, API | Pending | High |
| Events Manager: Add, Edit, Delete, API | Pending | High |
| Admin mobile menu toggle | Pending | Low |
| Quick Actions use React Router | Pending | Low |

---

*Last updated: February 2026*
