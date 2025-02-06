import Image from "next/image"
import { Lock, Mail } from "lucide-react"
import Link from "next/link"

const SignIn = () => {
  return (
    <div className="w-full max-w-6xl h-[85vh] bg-white/5 rounded-2xl p-8 backdrop-blur-md relative flex items-center justify-center shadow-2xl">
      <div className="flex justify-between items-center gap-16 p-8 w-full">
        <div className="flex flex-col gap-4 flex-1">
          <div className="space-y-3">
            <h1 className="font-bold text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome back
            </h1>
            <p className="text-gray-400 text-lg">
              Please enter your account details to continue
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white/80 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-white/30 transition-all hover:border-white/20"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white/80 font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  id="password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-white/30 transition-all hover:border-white/20"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer group">
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                Keep me signed in
              </span>
            </label>
            <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
              Forgot Password?
            </button>
          </div>

          <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl py-3 px-6 text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[0.99] active:scale-[0.97]">
            Sign In
          </button>

          <div className="relative flex items-center gap-4 py-4">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-white/60 text-sm">Or continue with</span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="flex gap-4 justify-center">
            <button className="flex-1 bg-white/5 hover:bg-white/10 rounded-xl py-3 text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3">
              <Image
                src="/icons/google.svg"
                alt="Sign in with Google"
                width={20}
                height={20}
                className="opacity-80"
              />
              <span>Google</span>
            </button>
            <button className="flex-1 bg-white/5 hover:bg-white/10 rounded-xl py-3 text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3">
              <Image
                src="/icons/github-light.svg"
                alt="Sign in with GitHub"
                width={20}
                height={20}
                className="opacity-80"
              />
              <span>GitHub</span>
            </button>
          </div>
        </div>

        <div className="relative h-[75vh] w-[450px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl" />

          <div className="relative z-10 flex h-full flex-col justify-between text-white">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Join our community</h2>
              <p className="text-gray-300">
                Connect with developers worldwide and build amazing projects together
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="text-sm text-gray-400">Active Developers</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">5K+</h3>
                  <p className="text-sm text-gray-400">Projects Created</p>
                </div>
              </div>

              <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  &quot;This platform has transformed how I collaborate with other developers. The community is incredibly supportive and talented!&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                  <div>
                    <h4 className="font-medium">Sarah Chen</h4>
                    <p className="text-sm text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              Don&apos;t have an account? <Link href="sign-up" className="text-indigo-400 hover:text-indigo-300">Create one</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn