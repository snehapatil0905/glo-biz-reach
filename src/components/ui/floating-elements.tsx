
export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-industryspan-green/20 to-blue-500/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-industryspan-green/10 rounded-full blur-2xl animate-float-reverse"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-industryspan-green/40 rotate-45 animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-blue-500/40 rounded-full animate-ping-slow"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-8 bg-gradient-to-b from-industryspan-green/30 to-transparent animate-sway"></div>
    </div>
  );
};
