import React, { useState, useEffect } from 'react';
import { RotateCw, Check, Shield } from 'lucide-react';
import { SPORTS_CONFIG as FALLBACK_SPORTS } from '../data/sportsData';

const SLEEVE_BADGES = [
  { id: 'none', name: 'No badge', fee: 0, label: null },
  { id: 'premier-league', name: 'Premier League (+रू 150)', fee: 150, label: 'EPL LION' },
  { id: 'ucl-starball', name: 'Champions League (+रू 200)', fee: 200, label: 'STARBALL' },
  { id: 'nepal-flag', name: 'Nepal Flag Patch (+रू 100)', fee: 100, label: '🇳🇵 NEPAL' }
];

function getKitBackColor(teamName = '', sportKey = 'football') {
  const team = teamName.toLowerCase();
  if (team.includes('nepal') || team.includes('rhino')) return '#003893';
  if (team.includes('arsenal') || team.includes('united') || team.includes('bulls') || team.includes('barcelona') || team.includes('bengaluru')) return '#DB0007';
  if (team.includes('madrid')) return '#1E293B';
  if (team.includes('miami')) return '#E879F9';
  if (team.includes('chennai') || team.includes('lakers')) return '#EAB308';
  if (team.includes('india') || team.includes('warriors')) return '#1D4ED8';
  return sportKey === 'cricket' ? '#003893' : '#C51D34';
}

export default function JerseyLab({ activeSport, sportsCatalog, onAddToCart }) {
  const catalog = sportsCatalog || FALLBACK_SPORTS;
  const currentSport = catalog[activeSport] || catalog.football || FALLBACK_SPORTS.football;
  
  // Dynamically map store jerseys into Customization Studio kits
  const labKits = (currentSport.jerseys || []).map(j => ({
    id: j.id,
    name: j.name,
    category: j.team || j.category,
    basePrice: j.price,
    frontImage: j.image,
    backColor: getKitBackColor(j.team || j.name, activeSport),
    textColor: '#FFFFFF',
    numberColor: '#FFFFFF',
    defaultName: (j.team || 'PLAYER').split(' ')[0].toUpperCase(),
    defaultNumber: '10'
  }));

  const [selectedKit, setSelectedKit] = useState(labKits[0] || null);
  const [viewSide, setViewSide] = useState('back'); // Default to BACK
  const [playerName, setPlayerName] = useState('SAGAR');
  const [playerNumber, setPlayerNumber] = useState('10');
  const [selectedBadge, setSelectedBadge] = useState(SLEEVE_BADGES[0]);
  const [selectedSize, setSelectedSize] = useState('L');
  const [isAdded, setIsAdded] = useState(false);

  // Sync selectedKit when sport or store catalog changes
  useEffect(() => {
    if (labKits.length > 0) {
      setSelectedKit(labKits[0]);
      setPlayerName(labKits[0].defaultName || 'SAGAR');
      setPlayerNumber(labKits[0].defaultNumber || '10');
    }
  }, [activeSport, sportsCatalog]);

  if (!selectedKit) return null;

  const customPrintFee = 350;
  const badgeFee = selectedBadge.fee;
  const totalPrice = selectedKit.basePrice + customPrintFee + badgeFee;

  const handleSelectKitById = (kitId) => {
    const kit = labKits.find(k => k.id === kitId) || labKits[0];
    setSelectedKit(kit);
    setPlayerName(kit.defaultName || 'PLAYER');
    setPlayerNumber(kit.defaultNumber || '10');
    setViewSide('back');
  };

  const handleNameChange = (val) => {
    setPlayerName(val.toUpperCase());
    if (viewSide !== 'back') setViewSide('back');
  };

  const handleNumberChange = (val) => {
    setPlayerNumber(val);
    if (viewSide !== 'back') setViewSide('back');
  };

  const handleAddCustomKit = () => {
    const customJerseyObj = {
      id: `${selectedKit.id}-custom`,
      name: `${selectedKit.name} (Custom: ${playerName || 'CUSTOM'} #${playerNumber || '10'})`,
      team: selectedKit.category,
      price: selectedKit.basePrice,
      image: selectedKit.frontImage,
      availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
    };

    onAddToCart(customJerseyObj, selectedSize, {
      customName: playerName.toUpperCase(),
      customNumber: playerNumber,
      badge: selectedBadge.name,
      customFee: customPrintFee + badgeFee
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <section id="jersey-lab" className="w-full py-16 px-2 sm:px-4 md:px-6 relative z-20 font-body">
      
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[11px] font-medium text-neutral-400 tracking-wide block mb-2 font-heading">
          Customization studio
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-tight">
          Design your matchday kit
        </h2>
      </div>

      {/* Studio Container */}
      <div className="w-full bg-[#1E1E1E] text-white rounded-2xl p-6 sm:p-10 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Interactive Kit Stamping Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center select-none border border-white/10">
            
            {/* FRONT VIEW */}
            {viewSide === 'front' ? (
              <div className="relative w-full h-full bg-[#1A1A1A]">
                <img 
                  src={selectedKit.frontImage} 
                  alt={selectedKit.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium text-white tracking-wider uppercase font-heading">
                  Front View • Official Club Crest
                </div>
              </div>
            ) : (
              /* BACK VIEW: Dedicated Vinyl Stamping Surface */
              <div 
                className="relative w-full h-full flex flex-col items-center justify-between p-8 transition-colors duration-500"
                style={{ backgroundColor: selectedKit.backColor }}
              >
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
                <div className="w-32 h-6 rounded-b-full bg-black/20 border-b border-white/20 z-10"></div>

                {selectedBadge.label && (
                  <div className="absolute top-10 right-6 px-2.5 py-1 rounded-md bg-white text-[#111111] text-[9px] font-extrabold font-heading tracking-wider shadow-md border border-black/10 z-10 animate-fade-in">
                    {selectedBadge.label}
                  </div>
                )}

                {/* Center Back */}
                <div className="my-auto flex flex-col items-center justify-center text-center z-10 w-full px-4">
                  <span 
                    className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] uppercase transition-all duration-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-heading"
                    style={{ color: selectedKit.textColor }}
                  >
                    {playerName || 'YOUR NAME'}
                  </span>

                  <span 
                    className="text-7xl sm:text-8xl font-black tracking-tight leading-none transition-all duration-200 drop-shadow-[0_6px_14px_rgba(0,0,0,0.7)] mt-2 font-heading"
                    style={{ color: selectedKit.numberColor }}
                  >
                    {playerNumber || '10'}
                  </span>
                </div>

                <div className="z-10 flex items-center gap-1.5 text-[10px] font-medium text-white/80 bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-md border border-white/10 font-heading">
                  <Shield className="w-3 h-3 text-[#C51D34]" />
                  <span>Jersey Hub Authentic Vinyl Print</span>
                </div>
              </div>
            )}

            {/* Flip Button */}
            <button
              type="button"
              onClick={() => setViewSide(prev => prev === 'front' ? 'back' : 'front')}
              className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white text-[#111111] flex items-center gap-2 text-xs font-semibold cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95 font-heading z-20"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Viewing: {viewSide === 'front' ? 'Front (Crest)' : 'Back (Custom)'}</span>
            </button>

          </div>

          <span className="text-[11px] text-neutral-400 font-heading mt-3 uppercase tracking-wider">
            Click button to flip between Front (Crest) & Back (Custom Print)
          </span>
        </div>

        {/* Right: Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          
          {/* 1. Kit Selection Dropdown — Sleek & Clean */}
          <div>
            <label className="text-[12px] font-medium text-neutral-400 block mb-2 font-heading flex justify-between">
              <span>1. Select kit silhouette ({currentSport.name})</span>
              <span className="text-[11px] text-[#C51D34] font-medium">Base: रू {selectedKit.basePrice.toLocaleString()}</span>
            </label>

            <select
              value={selectedKit.id}
              onChange={(e) => handleSelectKitById(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/15 text-white text-[13px] font-semibold outline-none focus:border-white transition-colors cursor-pointer font-heading"
            >
              {labKits.map((kit) => (
                <option key={kit.id} value={kit.id} className="bg-[#1A1A1A] text-white">
                  {kit.name} — रू {kit.basePrice.toLocaleString()} ({kit.category})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Custom Name & Squad Number Inputs */}
          <div>
            <div className="flex items-center justify-between mb-2.5 font-heading">
              <label className="text-[12px] font-medium text-neutral-400 block">
                2. Name & number on back
              </label>
              <span className="text-[11px] text-[#C51D34] font-medium">Official Vinyl +रू 350</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 font-heading">
              <div className="col-span-2">
                <input
                  type="text"
                  maxLength={12}
                  value={playerName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="PLAYER NAME"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-white/15 text-white text-[13px] font-semibold uppercase tracking-wider outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="number"
                  min={0}
                  max={99}
                  value={playerNumber}
                  onChange={(e) => handleNumberChange(e.target.value)}
                  placeholder="#"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141414] border border-white/15 text-white text-[13px] font-bold text-center outline-none focus:border-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 3. Sleeve Badge Selection */}
          <div>
            <label className="text-[12px] font-medium text-neutral-400 block mb-2.5 font-heading">
              3. Official tournament sleeve badge
            </label>
            <div className="grid grid-cols-2 gap-2 font-heading">
              {SLEEVE_BADGES.map((badge) => (
                <button
                  key={badge.id}
                  type="button"
                  onClick={() => setSelectedBadge(badge)}
                  className={`px-3 py-2 rounded-xl text-[12px] font-medium text-left border transition-colors cursor-pointer ${
                    selectedBadge.id === badge.id
                      ? 'bg-white text-[#111111] border-white font-semibold'
                      : 'bg-[#141414] text-neutral-300 hover:bg-[#252525] border-white/10'
                  }`}
                >
                  {badge.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Size Picker */}
          <div>
            <label className="text-[12px] font-medium text-neutral-400 block mb-2.5 font-heading">
              4. Select size
            </label>
            <div className="flex items-center gap-2 font-heading">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-lg text-[12px] font-medium transition-colors cursor-pointer flex items-center justify-center ${
                    selectedSize === size
                      ? 'bg-white text-[#111111] font-semibold'
                      : 'bg-[#141414] text-neutral-300 hover:bg-[#252525] border border-white/10'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Total & Add to Bag CTA */}
          <div className="pt-5 border-t border-white/10 flex items-center justify-between font-heading">
            <div>
              <span className="text-[11px] text-neutral-400 block">Custom kit total</span>
              <span className="text-xl font-semibold text-white">
                रू {totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAddCustomKit}
              className={`px-7 py-3 rounded-full text-[13px] font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-md ${
                isAdded 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-[#111111] hover:bg-neutral-200 font-semibold'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Custom Kit Added!</span>
                </>
              ) : (
                <span>Add Custom Kit</span>
              )}
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
