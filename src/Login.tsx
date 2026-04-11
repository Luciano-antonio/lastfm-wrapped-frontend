function Login() {
 return(
    <div  className="min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/23 blur-[180px] z-0 pointer-events-none"></div>
            <div className="rounded-[32px] p-12 bg-zinc-900/40 backdrop-blur-md border border-white/10 flex flex-col items-center shadow-2xl"> 
            <h1 className="text-white mb-6 text-4xl">Last.fm Wrapped</h1>
            <button  onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/login`} className="bg-gradient-to-r from-green-600 to-green-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-bold text-black shadow">
                Entrar com Last.fm
            </button>
        </div>
    </div>
 )
}

export default Login