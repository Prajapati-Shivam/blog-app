import { handleLogin } from "@/lib/action";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleLogin}>
        <button>Login with Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
