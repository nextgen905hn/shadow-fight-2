'use client'
import React, { useState, useEffect } from 'react';
import { Download, Shield, Star, Users, Gamepad2, Zap, Trophy, Sword } from 'lucide-react';

export default function ShadowFight2Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animate download counter
    const timer = setInterval(() => {
      setDownloadCount(prev => {
        if (prev < 2847593) {
          return prev + Math.floor(Math.random() * 1000) + 500;
        }
        return 2847593;
      });
    }, 50);

    setTimeout(() => clearInterval(timer), 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Sword className="w-8 h-8 text-orange-500" />,
      title: "Unlimited Money & Gems",
      description: "Get unlimited coins and gems to purchase the best weapons, armor, and magical abilities without restrictions."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "All Weapons Unlocked",
      description: "Access every weapon in the game from the start, including legendary swords, nunchucks, and magical weapons."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Max Level Characters",
      description: "Start with maximum level characters and unlock all special moves and fighting techniques instantly."
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      title: "No Ads Experience",
      description: "Enjoy uninterrupted gameplay with all advertisements removed for a premium gaming experience."
    }
  ];

  const gameplayFeatures = [
    "Epic storyline with 6 different worlds to explore",
    "Realistic physics-based combat system",
    "Hundreds of weapons and armor sets to collect",
    "Magical abilities and special fighting moves",
    "Tournament mode with challenging opponents",
    "Survival mode for endless combat experience"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}


      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Shadow Fight 2 Mod APK
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate martial arts RPG with unlimited resources, all weapons unlocked, and premium features. 
            Download the latest Shadow Fight 2 Mod APK and dominate the shadow world with enhanced gameplay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
              <Download className="w-6 h-6" />
              <span>Download Now - Free</span>
            </button>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-5 h-5" />
              <span>{downloadCount.toLocaleString()}+ Downloads</span>
            </div>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
            <div>Latest Version 2.30.1</div>
            <div>Android 4.4+</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Shadow Fight 2 Mod APK?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-400">About Shadow Fight 2 Mod APK</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Shadow Fight 2 is one of the most popular martial arts fighting games that combines RPG elements with classic fighting mechanics. 
                  This modified version enhances your gaming experience by providing unlimited resources and unlocking premium features that would 
                  otherwise require extensive grinding or in-app purchases.
                </p>
                <p>
                  Our Shadow Fight 2 Mod APK offers a complete transformation of the original game, allowing players to access all weapons, 
                  armor sets, and magical abilities from the beginning. With unlimited money and gems, you can focus on mastering combat 
                  techniques and enjoying the rich storyline without worrying about resource management.
                </p>
                <p>
                  The game features stunning silhouette-style graphics, realistic physics-based combat, and an engaging storyline that takes 
                  you through six different worlds. Each world presents unique challenges, enemies, and bosses that will test your fighting 
                  skills and strategic thinking.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Game Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>File Size:</span>
                  <span className="font-semibold">127 MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-semibold">2.30.1</span>
                </div>
                <div className="flex justify-between">
                  <span>Android Required:</span>
                  <span className="font-semibold">4.4+</span>
                </div>
                <div className="flex justify-between">
                  <span>Developer:</span>
                  <span className="font-semibold">Nekki</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-semibold">Action/RPG</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Features */}
      <section id="gameplay" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Enhanced Gameplay Features</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">What Makes This Mod Special?</h3>
              <ul className="space-y-4">
                {gameplayFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">Combat System</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Shadow Fight 2 Mod APK features an intuitive yet deep combat system that allows for both button-mashing fun and 
                  strategic gameplay. Master various fighting styles including karate, kung fu, boxing, and weapon-based combat techniques.
                </p>
                <p>
                  With our modified version, you can experiment with all fighting styles from the beginning. The unlimited resources 
                  allow you to purchase and upgrade weapons immediately, letting you discover your preferred combat approach without 
                  the usual progression barriers.
                </p>
                <p>
                  The physics-based combat system ensures that every hit feels impactful, while the variety of special moves and 
                  magical abilities adds layers of strategy to each encounter. Whether you prefer quick, agile attacks or powerful, 
                  devastating blows, there's a fighting style that suits your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="installation" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Easy Installation Guide</h2>
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enable Unknown Sources</h3>
                  <p className="text-gray-300">Go to Settings  Security  Unknown Sources and enable installation from unknown sources on your Android device.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download the APK File</h3>
                  <p className="text-gray-300">Click the download button above to get the latest Shadow Fight 2 Mod APK file to your device.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Install the Game</h3>
                  <p className="text-gray-300">Locate the downloaded APK file in your file manager and tap on it to begin the installation process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Launch and Enjoy</h3>
                  <p className="text-gray-300">Once installed, open the game and start your shadow fighting adventure with all premium features unlocked!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Is Shadow Fight 2 Mod APK safe to download?</h3>
              <p className="text-gray-300">Yes, our Shadow Fight 2 Mod APK is completely safe and has been tested for malware and viruses. We ensure all our mod files are clean and secure for download.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Do I need to root my Android device?</h3>
              <p className="text-gray-300">No, rooting is not required. Our Shadow Fight 2 Mod APK works on both rooted and non-rooted Android devices without any additional modifications.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Will I lose my progress if I install the mod?</h3>
              <p className="text-gray-300">If you're installing over an existing game, your progress might be affected. We recommend backing up your save data before installation or starting fresh with the enhanced mod features.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Can I play online with the modded version?</h3>
              <p className="text-gray-300">Shadow Fight 2 is primarily a single-player game with offline gameplay. The mod enhances the single-player experience without affecting any online features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master the Shadow World?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join millions of players who have enhanced their Shadow Fight 2 experience with our premium mod APK. 
            Download now and unleash your full fighting potential with unlimited resources and unlocked content.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg">
            <Download className="w-7 h-7" />
            <span>< a href="shadowfight2.site" > Download Shadow Fight 2 Mod APK</a></span>
          </button>
          <p className="text-sm text-gray-400 mt-4">Free Download • No Registration Required • Instant Access</p>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}