export default function FlowerLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flower-loader-flower" aria-hidden="true">
        <div className="flower-loader-petal flower-loader-petal1" />
        <div className="flower-loader-petal flower-loader-petal2" />
        <div className="flower-loader-petal flower-loader-petal3" />
        <div className="flower-loader-petal flower-loader-petal4" />
        <div className="flower-loader-petal flower-loader-petal5" />
        <div className="flower-loader-petal flower-loader-petal6" />
        <div className="flower-loader-petal flower-loader-petal7" />
        <div className="flower-loader-petal flower-loader-petal8" />
        <div className="flower-loader-center" />
      </div>
      <p className="font-marcellus text-[0.55rem] tracking-[0.3em] uppercase text-charcoal/40 animate-loader-pulse">
        Loading
      </p>
    </div>
  );
}
