import React from 'react';

const SteakPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Steak: Cuts and Cooking</h1>
      {/* EDIT YOUR RANKINGS HERE */}
      +.
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">1. Ribeye</h2>
          <p className="mb-4">My top choice for its incredible marbling, which renders down during cooking to deliver a rich, beefy flavor and tender texture.</p>
          <h3 className="text-xl font-semibold">Preferred Method: Reverse Sear</h3>
          <ol className="list-decimal list-inside mt-2">
            <li>Season generously with salt and pepper.</li>
            <li>Bake in the oven at 275°F (135°C) until the internal temperature reaches 125°F (52°C) for medium-rare.</li>
            <li>Sear on a scorching hot cast-iron skillet with butter and garlic for 60 seconds per side.</li>
            <li>Rest for 10 minutes before slicing.</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">2. New York Strip</h2>
          <p className="mb-4">A great balance of flavor and tenderness with a satisfying chew. It has a beef-forward flavor that stands up well to a simple seasoning.</p>
          <h3 className="text-xl font-semibold">Preferred Method: Classic Pan Sear</h3>
          <ol className="list-decimal list-inside mt-2">
            <li>Pat the steak dry and season well.</li>
            <li>Heat a cast-iron skillet over high heat with a bit of oil.</li>
            <li>Sear for 3-4 minutes per side for medium-rare.</li>
            <li>Add butter, garlic, and thyme to the pan during the last minute and baste the steak.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SteakPage;