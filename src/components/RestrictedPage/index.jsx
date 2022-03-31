function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn === true ? (
        <div>
          <h1>Bem-vindo {user}!</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Você não pode acessar esta página!</h1>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </>
  );
}
export default RestrictedPage;
