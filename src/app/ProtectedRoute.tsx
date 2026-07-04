function ProtectedRoute() {
    return (
        token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoute
