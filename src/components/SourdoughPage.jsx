import React from 'react';

const SourdoughPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Sourdough Recipes</h1>
      {/* EDIT YOUR RECIPE HERE */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Classic Country Loaf</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Ingredients</h3>
        <ul className="list-disc list-inside">
          <li>500g Bread Flour</li>
          <li>375g Water (75% hydration)</li>
          <li>100g Levain (20% inoculation)</li>
          <li>10g Salt (2%)</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Instructions</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Autolyse:</strong> Mix flour and water. Let it rest for 1 hour.</li>
          <li><strong>Mix:</strong> Add levain and salt. Mix until combined.</li>
          <li><strong>Bulk Fermentation:</strong> Perform 4 sets of folds every 30 minutes for the first 2 hours. Let it rest for another 2 hours.</li>
          <li><strong>Shape & Proof:</strong> Shape the dough and place it in a banneton. Cold proof in the fridge for 12-16 hours.</li>
          <li><strong>Bake:</strong> Preheat Dutch oven to 500°F (260°C). Bake covered for 20 minutes, then uncovered for 20-25 minutes until golden brown.</li>
        </ol>
      </div>
    </div>
  );
};

export default SourdoughPage;