"use client"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect } from "react"

export default function AuthForm() {
  const supabase = createClientComponentClient()
  let callBackURL
  useEffect(() => {
    callBackURL = `${location.origin}/auth/callback`
  })

  return (
    <div className="w-1/2">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="light"
        showLinks={false}
        providers={["google", "facebook"]}
        redirectTo={callBackURL}
        localization={{
          variables: {
            magic_link: {
              email_input_label: "Email",
              button_label: "Đăng nhập",
              loading_button_label: "Đang gửi mail...",
              confirmation_text: "Kiểm tra email của bạn để đăng nhập",
              email_input_placeholder: "Nhập email của bạn",
            },
          },
        }}
      />
    </div>
  )
}
