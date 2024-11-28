import SignIn from "@/components/signIn";
import UserAvatar from "@/components/UserAvatar";

export default function Home() {
  return (
    <div>
      <UserAvatar />
      <h1>Hello from Notch</h1>
      <SignIn />
    </div>
  );
}
