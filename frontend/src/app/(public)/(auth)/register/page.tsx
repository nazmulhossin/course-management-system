import { SignupForm } from "@/components/auth/SignupForm"

export default function RegisterPage() {
  return (
    <div className="bg-bgSecondary min-h-svh flex items-center justify-center">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
