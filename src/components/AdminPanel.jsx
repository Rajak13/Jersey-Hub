import React, { useState } from 'react';
import { X, Plus, Trash2, Save, Check } from 'lucide-react';

export default function AdminPanel({ isOpen, onClose, sportsCatalog, onUpdateSportsCatalog }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('football'); // 'football' | 'cricket' | 'basketball' | 'retroArchives' | 'communityPosts'
  const [data, setData] = useState(sportsCatalog);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // General field updater
  const handleItemChange = (sectionKey, index, field, value) => {
    const list = [...(data[sectionKey] || [])];
    list[index] = {
      ...list[index],
      [field]: field === 'price' || field === 'originalPrice' || field === 'basePrice' ? Number(value) : value
    };

    setData(prev => ({
      ...prev,
      [sectionKey]: list
    }));
  };

  // Sport item updater
  const handleJerseyChange = (sportKey, index, field, value) => {
    const list = [...(data[sportKey].jerseys || [])];
    list[index] = {
      ...list[index],
      [field]: field === 'price' || field === 'originalPrice' ? Number(value) : value
    };

    setData(prev => ({
      ...prev,
      [sportKey]: {
        ...prev[sportKey],
        jerseys: list
      }
    }));
  };

  // Add Item handler
  const handleAddItem = () => {
    if (activeTab === 'retroArchives') {
      const newItem = {
        id: `retro-${Date.now()}`,
        title: 'New Retro Classic Kit',
        era: 'Classic Season',
        price: 2500,
        tag: 'Archive',
        image: 'images/united-jerseys.jpg',
        story: 'Story description for this classic drop.'
      };
      setData(prev => ({ ...prev, retroArchives: [newItem, ...(prev.retroArchives || [])] }));
    } else if (activeTab === 'communityPosts') {
      const newItem = {
        id: Date.now(),
        name: 'New Fan Name',
        location: 'Kathmandu',
        kit: 'Nepal Jersey',
        image: 'images/football-jerseys.jpg',
        review: 'Authentic quality and fast delivery in Nepal!'
      };
      setData(prev => ({ ...prev, communityPosts: [newItem, ...(prev.communityPosts || [])] }));
    } else {
      const newJersey = {
        id: `${activeTab}-${Date.now()}`,
        name: 'New Matchday Kit',
        team: 'Club / Team',
        category: data[activeTab].categories[1] || 'Premier League',
        price: 2500,
        originalPrice: 3000,
        badge: 'New Arrival',
        image: 'images/football-jerseys.jpg',
        description: 'Product description.',
        availableSizes: ['S', 'M', 'L', 'XL'],
        inStock: true
      };
      setData(prev => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          jerseys: [newJersey, ...prev[activeTab].jerseys]
        }
      }));
    }
  };

  // Delete Item handler
  const handleDeleteItem = (index) => {
    if (activeTab === 'retroArchives') {
      setData(prev => ({ ...prev, retroArchives: prev.retroArchives.filter((_, i) => i !== index) }));
    } else if (activeTab === 'communityPosts') {
      setData(prev => ({ ...prev, communityPosts: prev.communityPosts.filter((_, i) => i !== index) }));
    } else {
      const updated = data[activeTab].jerseys.filter((_, i) => i !== index);
      setData(prev => ({
        ...prev,
        [activeTab]: { ...prev[activeTab], jerseys: updated }
      }));
    }
  };

  const handleSave = () => {
    onUpdateSportsCatalog(data);
    try {
      localStorage.setItem('jh_sports_catalog', JSON.stringify(data));
    } catch (e) {
      console.error('LocalStorage error:', e);
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all store sections to original default data?')) {
      localStorage.removeItem('jh_sports_catalog');
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-body">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Admin Header */}
        <div className="p-6 bg-[#1A1A1A] text-white flex items-center justify-between font-heading">
          <div>
            <h2 className="font-semibold text-lg">Store Owner Full Admin Portal</h2>
            <p className="text-[11px] text-neutral-400">Edit Collection, Heritage Vault, and Community Wall photos, titles, prices, and reviews live.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-full bg-[#C51D34] hover:bg-[#A01528] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-md"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Saved All Sections!' : 'Save Store Changes'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Tabs Selector */}
        <div className="px-6 py-3 bg-[#FAFAF8] border-b border-black/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar font-heading">
          <button
            type="button"
            onClick={() => setActiveTab('football')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'football' ? 'bg-[#1A1A1A] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            Football ({data.football?.jerseys?.length || 0})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cricket')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'cricket' ? 'bg-[#1A1A1A] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            Cricket ({data.cricket?.jerseys?.length || 0})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('basketball')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'basketball' ? 'bg-[#1A1A1A] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            Basketball ({data.basketball?.jerseys?.length || 0})
          </button>

          <span className="w-[1px] h-4 bg-black/10 mx-1"></span>

          <button
            type="button"
            onClick={() => setActiveTab('retroArchives')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'retroArchives' ? 'bg-[#1A1A1A] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            Heritage Vault ({data.retroArchives?.length || 0})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('communityPosts')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'communityPosts' ? 'bg-[#1A1A1A] text-white' : 'text-[#666666] hover:text-[#1A1A1A]'
            }`}
          >
            Community Wall ({data.communityPosts?.length || 0})
          </button>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-3 py-1.5 rounded-full border border-red-200 text-[#C51D34] hover:bg-red-50 text-[11px] font-medium transition-colors cursor-pointer"
            >
              Reset Defaults
            </button>

            <button
              type="button"
              onClick={handleAddItem}
              className="px-3.5 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Item</span>
            </button>
          </div>
        </div>

        {/* Content Section List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          
          {/* SECTION 1: Heritage Vault / Retro Archives */}
          {activeTab === 'retroArchives' && (
            (data.retroArchives || []).map((item, index) => (
              <div key={item.id || index} className="p-4 bg-[#FAFAF8] rounded-xl border border-black/[0.06] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between font-heading">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <img src={item.image} alt={item.title} className="w-14 h-14 rounded-lg object-cover bg-neutral-200 shrink-0" />
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Image Path / Web URL</label>
                    <input type="text" value={item.image} onChange={(e) => handleItemChange('retroArchives', index, 'image', e.target.value)} className="w-full md:w-56 px-2.5 py-1 text-xs bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Retro Title</label>
                    <input type="text" value={item.title} onChange={(e) => handleItemChange('retroArchives', index, 'title', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Era / Season</label>
                    <input type="text" value={item.era} onChange={(e) => handleItemChange('retroArchives', index, 'era', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between">
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Price (रू)</label>
                    <input type="number" value={item.price} onChange={(e) => handleItemChange('retroArchives', index, 'price', e.target.value)} className="w-24 px-2.5 py-1 text-xs font-semibold bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <button type="button" onClick={() => handleDeleteItem(index)} className="p-2 rounded-lg text-[#999999] hover:text-[#C51D34] hover:bg-red-50 transition-colors cursor-pointer mt-4">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}

          {/* SECTION 2: Community Wall Posts */}
          {activeTab === 'communityPosts' && (
            (data.communityPosts || []).map((post, index) => (
              <div key={post.id || index} className="p-4 bg-[#FAFAF8] rounded-xl border border-black/[0.06] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between font-heading">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <img src={post.image} alt={post.name} className="w-14 h-14 rounded-lg object-cover bg-neutral-200 shrink-0" />
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Fan Photo URL</label>
                    <input type="text" value={post.image} onChange={(e) => handleItemChange('communityPosts', index, 'image', e.target.value)} className="w-full md:w-56 px-2.5 py-1 text-xs bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Fan Name</label>
                    <input type="text" value={post.name} onChange={(e) => handleItemChange('communityPosts', index, 'name', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Location (Nepal)</label>
                    <input type="text" value={post.location} onChange={(e) => handleItemChange('communityPosts', index, 'location', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Tagged Kit</label>
                    <input type="text" value={post.kit} onChange={(e) => handleItemChange('communityPosts', index, 'kit', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <button type="button" onClick={() => handleDeleteItem(index)} className="p-2 rounded-lg text-[#999999] hover:text-[#C51D34] hover:bg-red-50 transition-colors cursor-pointer self-center">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}

          {/* SECTION 3: Sports Matchday Collections (Football, Cricket, Basketball) */}
          {(activeTab === 'football' || activeTab === 'cricket' || activeTab === 'basketball') && (
            (data[activeTab]?.jerseys || []).map((jersey, index) => (
              <div key={jersey.id || index} className="p-4 bg-[#FAFAF8] rounded-xl border border-black/[0.06] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between font-heading">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <img src={jersey.image} alt={jersey.name} className="w-14 h-14 rounded-lg object-cover bg-neutral-200 shrink-0" />
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Image Path / Web URL</label>
                    <input type="text" value={jersey.image} onChange={(e) => handleJerseyChange(activeTab, index, 'image', e.target.value)} className="w-full md:w-56 px-2.5 py-1 text-xs bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Jersey Title</label>
                    <input type="text" value={jersey.name} onChange={(e) => handleJerseyChange(activeTab, index, 'name', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Team / Club</label>
                    <input type="text" value={jersey.team} onChange={(e) => handleJerseyChange(activeTab, index, 'team', e.target.value)} className="w-full px-2.5 py-1 text-xs font-medium bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between">
                  <div>
                    <label className="text-[10px] text-[#888888] block mb-0.5">Price (रू)</label>
                    <input type="number" value={jersey.price} onChange={(e) => handleJerseyChange(activeTab, index, 'price', e.target.value)} className="w-24 px-2.5 py-1 text-xs font-semibold bg-white border border-black/10 rounded-md outline-none focus:border-[#1A1A1A]" />
                  </div>
                  <button type="button" onClick={() => handleDeleteItem(index)} className="p-2 rounded-lg text-[#999999] hover:text-[#C51D34] hover:bg-red-50 transition-colors cursor-pointer mt-4">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
}
