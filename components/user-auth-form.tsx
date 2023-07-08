"use client"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function AuthForm() {
  const supabase = createClientComponentClient()

  return (
    <div className="w-1/2">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="light"
        showLinks={false}
        providers={["google", "facebook"]}
        redirectTo={`${location.origin}/auth/callback`}
        localization={{
          variables: {
            magic_link: {
              email_input_label: "Email",
              button_label: "Đăng nhập",
            },
          },
        }}
      />
    </div>
  )
}
