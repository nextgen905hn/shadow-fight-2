'use client'
import React, { useState } from 'react';
import { Calendar, User, Clock, Tag, Share2, BookOpen, Sword, Target, Zap, Trophy, Shield, Star } from 'lucide-react';

export default function ShadowFight2TipsGuide() {
  const [readingTime] = useState("12 min read");
  const [publishDate] = useState("December 18, 2024");

  const tableOfContents = [
    { id: "basics", title: "Shadow Fight 2 Combat Basics" },
    { id: "weapons", title: "Best Weapons Guide" },
    { id: "combos", title: "Ultimate Combo Attacks" },
    { id: "boss-fights", title: "Boss Battle Strategies" },
    { id: "equipment", title: "Equipment and Armor Guide" },
    { id: "magic", title: "Magic Abilities Mastery" },
    { id: "energy", title: "Energy Management Tips" },
    { id: "tournaments", title: "Tournament Winning Strategies" }
  ];

  const weaponCategories = [
    {
      name: "Swords",
      icon: <Sword className="w-6 h-6 text-blue-500" />,
      description: "Balanced weapons with good reach and damage",
      bestWeapons: ["Katana", "Broad Sword", "Blood Reaper"],
      pros: ["Good range", "Balanced stats", "Versatile moveset"],
      cons: ["Moderate speed", "Average damage per hit"]
    },
    {
      name: "Nunchucks",
      icon: <Target className="w-6 h-6 text-green-500" />,
      description: "Fast weapons with multiple hit potential",
      bestWeapons: ["Steel Nunchucks", "Flame Nunchucks", "Chain Knife"],
      pros: ["Very fast", "Multiple hits", "Good for combos"],
      cons: ["Short range", "Lower individual damage"]
    },
    {
      name: "Claws",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      description: "Lightning-fast weapons for aggressive players",
      bestWeapons: ["Steel Claws", "Composite Sword", "Lynx's Claws"],
      pros: ["Fastest speed", "Great for pressure", "High combo potential"],
      cons: ["Very short range", "Requires close combat"]
    }
  ];

  const combos = [
    {
      name: "Basic Punch Combo",
      input: "Punch → Punch → Kick",
      description: "A fundamental combo that works with any weapon. Great for beginners to learn timing.",
      damage: "Medium",
      difficulty: "Easy"
    },
    {
      name: "Weapon Strike Chain",
      input: "Weapon → Punch → Weapon",
      description: "Alternating between weapon and punch attacks creates unpredictable patterns.",
      damage: "High",
      difficulty: "Medium"
    },
    {
      name: "Jump Attack Combo",
      input: "Jump → Kick → Weapon → Punch",
      description: "Start with a jump attack to catch opponents off-guard, then follow up.",
      damage: "Very High",
      difficulty: "Hard"
    },
    {
      name: "Magic Combo Finisher",
      input: "Punch → Kick → Magic",
      description: "Build up to a devastating magic attack for maximum damage.",
      damage: "Extreme",
      difficulty: "Expert"
    }
  ];

  const bossTips = [
    {
      boss: "Lynx",
      difficulty: "Medium",
      strategy: "Focus on ranged attacks and avoid his claw rushes. Use throwing weapons when possible.",
      weakness: "Vulnerable after missing claw attacks"
    },
    {
      boss: "Hermit",
      difficulty: "Hard",
      strategy: "Stay mobile and use hit-and-run tactics. His magic is powerful but has cooldown periods.",
      weakness: "Slow recovery after magic attacks"
    },
    {
      boss: "Butcher",
      difficulty: "Very Hard",
      strategy: "Keep your distance and use long-range weapons. His close combat is devastating.",
      weakness: "Limited range with most attacks"
    },
    {
      boss: "Wasp",
      difficulty: "Extreme",
      strategy: "Perfect timing required. Study her patterns and exploit brief openings between combos.",
      weakness: "Brief vulnerability after combo chains"
    }
  ];

  const magicSpells = [
    {
      name: "Fireball",
      type: "Ranged",
      damage: "High",
      cooldown: "Short",
      description: "Quick ranged attack that's great for keeping distance from aggressive opponents."
    },
    {
      name: "Earthquake",
      type: "Area",
      damage: "Very High",
      cooldown: "Long",
      description: "Devastating area attack that hits opponents anywhere on screen. Best saved for critical moments."
    },
    {
      name: "Time Bomb",
      type: "Delayed",
      damage: "Extreme",
      cooldown: "Very Long",
      description: "Places a delayed explosion. Requires strategic positioning but offers massive damage."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">Pro Gaming Guide</span>
            </div>
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Pro Gaming Expert</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Shadow Fight 2 Tips and Tricks: Master Combat, Weapons, and Boss Battles
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Become a Shadow Fight 2 champion with our comprehensive guide covering advanced combat techniques, weapon mastery, 
            boss battle strategies, and secret tips to dominate every fight. Perfect for both beginners and experienced players.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
              <Tag className="w-3 h-3" />
              <span>Shadow Fight 2 Tips</span>
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Combat Guide</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Boss Strategies</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Weapon Guide</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Complete Guide Contents</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {tableOfContents.map((item, index) => (
              <li key={index}>
                <a href={`#${item.id}`} className="text-purple-600 hover:text-purple-800 hover:underline transition-colors flex items-center space-x-2">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600">
                    {index + 1}
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section id="basics" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Shadow Fight 2 Combat Basics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mastering Shadow Fight 2 combat requires understanding the fundamental mechanics that separate casual players 
              from champions. The game's physics-based fighting system rewards timing, positioning, and strategic thinking 
              over button mashing.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Essential Combat Principles:</h3>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li><strong>Timing is Everything:</strong> Wait for openings rather than constant attacking</li>
                <li><strong>Distance Management:</strong> Control the space between you and your opponent</li>
                <li><strong>Pattern Recognition:</strong> Learn enemy attack patterns and counter accordingly</li>
                <li><strong>Energy Conservation:</strong> Don't waste energy on blocked or missed attacks</li>
                <li><strong>Defensive Positioning:</strong> Sometimes stepping back is the best strategy</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Basic Attack Types</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shadow Fight 2 features three primary attack types: punches, kicks, and weapon attacks. Each has distinct 
              properties, speed, and damage characteristics. Understanding when to use each type is crucial for effective combat.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <h4 className="font-semibold text-gray-800 mb-2">Punches</h4>
                <p className="text-sm text-gray-600">Fast, low damage attacks good for interrupting enemy combos and building momentum.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <h4 className="font-semibold text-gray-800 mb-2">Kicks</h4>
                <p className="text-sm text-gray-600">Medium speed, good damage, excellent for keeping distance and counter-attacks.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <h4 className="font-semibold text-gray-800 mb-2">Weapon Attacks</h4>
                <p className="text-sm text-gray-600">Varies by weapon type, generally slower but higher damage with unique properties.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Movement and Positioning</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Effective movement separates good players from great ones. Learn to use forward and backward movement not just 
              for positioning, but as part of your attack strategy. Moving forward during an attack increases damage, while 
              moving backward can help you avoid counterattacks while still landing hits.
            </p>
          </section>

          <section id="weapons" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Best Weapons Guide for Shadow Fight 2</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing the right weapon can make or break your Shadow Fight 2 experience. Each weapon category offers unique 
              advantages and requires different strategies. Here's our comprehensive breakdown of the best weapons in each category.
            </p>

            <div className="space-y-8">
              {weaponCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon}
                    <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Best Weapons:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {category.bestWeapons.map((weapon, i) => (
                          <li key={i}>{weapon}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        {category.pros.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Disadvantages:</h4>
                      <ul className="list-disc list-inside text-red-600 space-y-1">
                        {category.cons.map((con, i) => (
                          <li key={i}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mt-8">
              <h3 className="font-semibold text-yellow-800 mb-2">Pro Tip: Weapon Selection Strategy</h3>
              <p className="text-yellow-700">
                Don't just choose weapons based on damage stats. Consider your playstyle, the enemy you're facing, and the 
                arena size. Fast weapons work better in tight spaces, while longer weapons excel in open areas.
              </p>
            </div>
          </section>

          <section id="combos" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ultimate Combo Attacks and Techniques</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Combo attacks are the key to dealing massive damage in Shadow Fight 2. These sequences chain multiple attacks 
              together, often leaving opponents unable to counter. Master these combos to dominate any fight.
            </p>

            <div className="space-y-6">
              {combos.map((combo, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{combo.name}</h3>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        combo.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        combo.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        combo.difficulty === 'Hard' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {combo.difficulty}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        combo.damage === 'Medium' ? 'bg-blue-100 text-blue-800' :
                        combo.damage === 'High' ? 'bg-purple-100 text-purple-800' :
                        combo.damage === 'Very High' ? 'bg-red-100 text-red-800' :
                        'bg-red-200 text-red-900'
                      }`}>
                        {combo.damage} Damage
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg mb-3">
                    <span className="font-mono text-lg font-semibold text-gray-800">{combo.input}</span>
                  </div>
                  
                  <p className="text-gray-600">{combo.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mt-8">
              <h3 className="font-semibold text-green-800 mb-2">Combo Training Tips:</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Practice combos in survival mode for consistent timing</li>
                <li>Start with basic combos before attempting advanced sequences</li>
                <li>Pay attention to enemy recovery time between your attacks</li>
                <li>Different weapons have different combo timings - practice with each type</li>
                <li>Learn to cancel combos if your opponent starts to counter</li>
              </ul>
            </div>
          </section>

          <section id="boss-fights" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Boss Battle Strategies and Weaknesses</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Boss fights in Shadow Fight 2 require specific strategies and patience. Each boss has unique patterns, 
              weaknesses, and devastating attacks. Here are proven strategies for defeating the toughest opponents.
            </p>

            <div className="space-y-6">
              {bossTips.map((boss, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{boss.boss}</h3>
                    <span className={`px-4 py-2 rounded-full font-semibold text-sm ${
                      boss.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      boss.difficulty === 'Hard' ? 'bg-orange-100 text-orange-800' :
                      boss.difficulty === 'Very Hard' ? 'bg-red-100 text-red-800' :
                      'bg-red-200 text-red-900'
                    }`}>
                      {boss.difficulty}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Strategy:</h4>
                      <p className="text-gray-600">{boss.strategy}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Key Weakness:</h4>
                      <p className="text-gray-600">{boss.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mt-8">
              <h3 className="font-semibold text-red-800 mb-2">Universal Boss Fight Tips:</h3>
              <ul className="list-disc list-inside text-red-700 space-y-2">
                <li>Always observe boss patterns in the first round before going aggressive</li>
                <li>Keep your health potions for the final round of boss fights</li>
                <li>Use magic abilities strategically - save powerful spells for critical moments</li>
                <li>Don't get greedy with attacks - patient play wins boss fights</li>
                <li>Upgrade your equipment before challenging new bosses</li>
              </ul>
            </div>
          </section>

          <section id="equipment" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Equipment and Armor Optimization Guide</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your equipment choices significantly impact your combat effectiveness. Understanding armor stats, weapon 
              enchantments, and equipment synergies will give you a massive advantage in battles.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Armor Types and Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-blue-500 mr-2" />
                  Light Armor
                </h4>
                <p className="text-gray-600 mb-3">Prioritizes mobility and energy regeneration over raw defense.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faster movement speed</li>
                  <li>• Better energy regeneration</li>
                  <li>• Lower defense stats</li>
                  <li>• Ideal for agile fighting styles</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  Heavy Armor
                </h4>
                <p className="text-gray-600 mb-3">Maximizes defense and health at the cost of mobility.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maximum damage reduction</li>
                  <li>• Higher health pool</li>
                  <li>• Slower movement speed</li>
                  <li>• Perfect for defensive players</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Enchantment Priorities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Weapon and armor enchantments can dramatically change your combat effectiveness. Here are the most valuable 
              enchantments to prioritize:
            </p>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-purple-800 mb-3">Top Weapon Enchantments:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-purple-700 space-y-1">
                  <li><strong>Bleeding:</strong> Damage over time effect</li>
                  <li><strong>Poisoning:</strong> Reduces enemy damage output</li>
                  <li><strong>Shocking:</strong> Stuns enemies briefly</li>
                </ul>
                <ul className="list-disc list-inside text-purple-700 space-y-1">
                  <li><strong>Lifesteal:</strong> Heals you on successful hits</li>
                  <li><strong>Critical Hit:</strong> Chance for double damage</li>
                  <li><strong>Armor Break:</strong> Ignores enemy defense</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="magic" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Magic Abilities Mastery</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Magic abilities are powerful tools that can turn the tide of any battle. Learning when and how to use each 
              spell effectively is crucial for advanced play.
            </p>

            <div className="space-y-6">
              {magicSpells.map((spell, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{spell.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{spell.type}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{spell.damage}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-600 mr-4">Cooldown: {spell.cooldown}</span>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${
                          (spell.damage === 'High' && star <= 3) ||
                          (spell.damage === 'Very High' && star <= 4) ||
                          (spell.damage === 'Extreme' && star <= 5)
                          ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{spell.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mt-8">
              <h3 className="font-semibold text-indigo-800 mb-2">Magic Usage Strategy:</h3>
              <p className="text-indigo-700 mb-3">
                Don't waste magic on weak enemies. Save your most powerful spells for boss fights and tournament finals. 
                Time your magic use when enemies are vulnerable or during their attack animations for guaranteed hits.
              </p>
              <ul className="list-disc list-inside text-indigo-700 space-y-1">
                <li>Use ranged magic to punish enemy whiffs</li>
                <li>Area magic is great for dealing with multiple enemies</li>
                <li>Delayed magic requires prediction and positioning</li>
                <li>Always have an escape plan after using magic</li>
              </ul>
            </div>
          </section>

          <section id="energy" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Energy Management and Optimization</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Energy management is often overlooked but crucial for consistent performance. Understanding how to maximize 
              your energy efficiency will improve your win rate significantly.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Energy Conservation Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Avoid unnecessary movements and attacks that don't connect</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Use light attacks to interrupt enemy combos instead of heavy attacks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Learn enemy patterns to minimize defensive energy waste</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Time your attacks for maximum efficiency</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Energy Recovery Methods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Wait between rounds for natural energy regeneration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Use energy potions strategically in difficult fights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Equip armor with energy regeneration bonuses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Watch ads for free energy refills (in original version)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tournaments" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Tournament Winning Strategies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tournaments are the ultimate test of your Shadow Fight 2 skills. These multi-round competitions require 
              endurance, strategy, and adaptability. Here's how to consistently place high in tournaments.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border mb-8">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Tournament Preparation Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Full energy before starting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Maximum health potions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Best equipment equipped</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Practiced combo sequences</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Study opponent patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Magic abilities ready</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Backup weapon strategy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700">Mental preparation complete</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Round-by-Round Strategy</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-800 mb-2">Early Rounds (1-3)</h4>
                <p className="text-gray-600">Conserve energy and health. Use basic attacks and learn opponent patterns. 
                Save magic and potions for later rounds.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-800 mb-2">Middle Rounds (4-6)</h4>
                <p className="text-gray-600">Start using more aggressive tactics. Deploy magic abilities when advantageous. 
                Use health potions if necessary to maintain momentum.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold text-gray-800 mb-2">Final Rounds (7+)</h4>
                <p className="text-gray-600">Go all-out with your best combos, magic abilities, and equipment. 
                This is where preparation and skill combine for victory.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">Championship Mindset:</h3>
              <p className="text-green-700 mb-3">
                Winning tournaments isn't just about combat skills - it's about mental endurance and strategic resource management. 
                Stay calm under pressure and stick to your game plan even when behind.
              </p>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>Don't panic if you lose a round - tournaments are about overall placement</li>
                <li>Adapt your strategy based on your opponents' weaknesses</li>
                <li>Sometimes playing defensively is the best offensive strategy</li>
                <li>Learn from losses and apply lessons in the next tournament</li>
              </ul>
            </div>
          </section>

          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Master Shadow Fight 2 Today!</h2>
            <p className="text-lg mb-6 opacity-90">
              Apply these strategies and techniques to dominate every fight. Whether you're facing tough bosses or 
              competing in tournaments, these tips will give you the edge you need to become a true shadow warrior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download Shadow Fight 2 Mod
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Share This Guide
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}