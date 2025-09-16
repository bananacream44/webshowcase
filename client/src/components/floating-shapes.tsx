export default function FloatingShapes() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute w-32 h-32 top-10 left-10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute w-20 h-20 top-1/2 right-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-40 h-40 bottom-20 left-1/4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute w-24 h-24 top-1/4 right-1/3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
