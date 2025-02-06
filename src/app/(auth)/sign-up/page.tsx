import Image from "next/image"
import { User, Mail, Lock } from "lucide-react"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className="w-full max-w-7xl h-[90vh] bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl backdrop-blur-md relative flex overflow-hidden shadow-2xl">
      <div className="w-1/2 order-2 bg-gradient-radial from-violet-800 via-indigo-800 to-blue-900 p-12 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-violet-500/20 rounded-full blur-3xl " />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-200 mb-6">
            Create Amazing Things
          </h1>
          <p className="text-lg text-white/80 mb-8 p-2 rounded-xl leading-relaxed backdrop-blur-sm">
            Join thousands of creators and developers building the future of technology.
          </p>

          <div className="space-y-4">
            {[
              "Access to premium developer tools",
              "Connect with global tech community",
              "Early access to beta features",
              "24/7 dedicated support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 hover:translate-x-2 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span className="text-white/90 hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full ring-2 ring-violet-400 bg-gradient-to-br from-violet-400 to-indigo-400"/>
              ))}
            </div>
            <div>
              <p className="text-white/90 text-sm mb-2 font-medium">
                &quot;Joining this platform was a game-changer for my development career!&quot;
              </p>
              <p className="text-white/60 text-sm">
                Along with 10k+ developers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Get Started</h2>
            <p className="text-gray-400">Create your account in minutes</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-white/80 font-medium block">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-violet-500/50 transition-all hover:border-white/20"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/80 font-medium block">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-violet-500/50 transition-all hover:border-white/20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/80 font-medium block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white outline-none focus:border-violet-500/50 transition-all hover:border-white/20"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl py-3 px-6 text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[0.99] active:scale-[0.97]">
              Create Account
            </button>

            <div className="relative flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-white/10" />
              <span className="text-white/60 text-sm">or sign up with</span>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-white/5 hover:bg-white/10 rounded-xl py-3 text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3">
                <Image
                  src="/icons/google.svg"
                  alt="Sign up with Google"
                  width={20}
                  height={20}
                  className="opacity-80"
                />
                <span>Google</span>
              </button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 rounded-xl py-3 text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center justify-center gap-3">
                <Image
                  src="/icons/github-light.svg"
                  alt="Sign up with GitHub"
                  width={20}
                  height={20}
                  className="opacity-80"
                />
                <span>GitHub</span>
              </button>
            </div>

            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-violet-400 hover:text-violet-300 font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp