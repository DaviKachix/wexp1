export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-10">Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-200 rounded-xl" />
        <div className="h-48 bg-gray-200 rounded-xl" />
        <div className="h-48 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}
