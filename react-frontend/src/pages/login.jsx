import '../styles/index.css';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Login to your account</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Email address</label>
                        <input
                            type="email"
                            required
                            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-300">
                            <input type="checkbox" className="mr-2 rounded bg-gray-700 border-gray-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-400 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <a href="/" className="text-blue-400 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

