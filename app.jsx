import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Terminal, Palette } from 'lucide-react';

export default function SurveyForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState('hacker'); // hacker, minimalist, kawaii
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  
  const [formData, setFormData] = useState({
    'entry.562363546': '',
    'entry.1154952827': '',
    'entry.971293297': '5',
    'entry.758655926': '5',
    'entry.344579238': '5',
    'entry.1819721634': '5',
    'entry.349003755': '5',
    'entry.1137800935': '5',
    'entry.1789767323': '5',
    'entry.53674337': '5',
    'entry.1323206493': '',
    'entry.71070638': '5',
    'entry.672544970': '5',
    'entry.910558859': '5',
    'entry.1894024659': '5',
    'entry.108519480': '5',
    'entry.969136413': '5',
    'entry.1923676063': '5',
    'entry.297530821': '5',
    'entry.439679883': '5',
    'entry.861083556': '5',
    'entry.350870857': '5',
    'entry.1127130651': '',
    'entry.1837266851': '5',
    'entry.836699724': '5',
    'entry.43159355': '5',
    'entry.1132593514': '5',
    'entry.981283906': '5',
    'entry.540263909': '5',
    'entry.420482620': '5',
    'entry.967301965': '',
    'entry.138021690': '',
    'entry.311128995': '5',
    'entry.930153716': ''
  });

  const questions = [
    { id: 'entry.562363546', type: 'radio', question: 'Veux-tu garder ton anonymat lors du conseil de classe ?', options: ['Oui', 'Non'] },
    { id: 'entry.1154952827', type: 'text', question: 'Qui es-tu ?' },
    { id: 'entry.971293297', type: 'rating', question: 'Que penses-tu de l\'ambiance générale de la classe ?' },
    { id: 'entry.758655926', type: 'rating', question: 'Le respect entre élèves' },
    { id: 'entry.344579238', type: 'rating', question: 'Le niveau de motivation dans la classe' },
    { id: 'entry.1819721634', type: 'rating', question: 'Le climat de travail dans la classe' },
    { id: 'entry.349003755', type: 'rating', question: 'À quel point tu te sens serein dans la classe ?' },
    { id: 'entry.1137800935', type: 'rating', question: 'Le sérieux global de la classe' },
    { id: 'entry.1789767323', type: 'rating', question: 'Le sentiment de sécurité dans la classe' },
    { id: 'entry.53674337', type: 'rating', question: 'L\'envie que tu as de venir en cours grâce à l\'ambiance' },
    { id: 'entry.1323206493', type: 'longtext', question: 'Écris toutes les remarques qui ne peuvent pas se résumer à une note sur 10' },
    { id: 'entry.71070638', type: 'rating', question: 'Ton organisation' },
    { id: 'entry.672544970', type: 'rating', question: 'Ton autonomie dans le travail' },
    { id: 'entry.910558859', type: 'rating', question: 'Ta capacité à rester concentré longtemps' },
    { id: 'entry.1894024659', type: 'rating', question: 'Tes méthodes de révision' },
    { id: 'entry.108519480', type: 'rating', question: 'Ton niveau de santé lié au travail scolaire' },
    { id: 'entry.969136413', type: 'rating', question: 'Ta confiance dans ta capacité à réussir' },
    { id: 'entry.1923676063', type: 'rating', question: 'À quel point penses-tu que tes notes correspondent à tes efforts ?' },
    { id: 'entry.297530821', type: 'rating', question: 'Ta gestion du stress', labels: ['Je stresse trop', 'Je suis confiant'] },
    { id: 'entry.439679883', type: 'rating', question: 'Ta capacité à te détacher de tes devoirs', labels: ['C impossible frrr', 'Je lâche quand je veux'] },
    { id: 'entry.861083556', type: 'rating', question: 'Ton niveau de motivation générale pour les cours' },
    { id: 'entry.350870857', type: 'rating', question: 'À quel point tu as des obligations en dehors de l\'école ?', labels: ['Rien', 'Je vais exploser'] },
    { id: 'entry.1127130651', type: 'longtext', question: 'Remarques ?' },
    { id: 'entry.1837266851', type: 'rating', question: 'Ta participation en cours', labels: ['Moi pas parler', 'Moi parler beaucoup'] },
    { id: 'entry.836699724', type: 'rating', question: 'Le rythme des cours', labels: ['Tortue', 'Flash McQueen prime'] },
    { id: 'entry.43159355', type: 'rating', question: 'La difficulté', labels: ['EZ', 'Harr sa mère'] },
    { id: 'entry.1132593514', type: 'rating', question: 'Sur 10 matières (environ), combien te plaisent vraiment ?' },
    { id: 'entry.981283906', type: 'rating', question: 'La clarté des explications des enseignants' },
    { id: 'entry.540263909', type: 'rating', question: 'Ta compréhension des cours', labels: ['Je capte que dalle', 'C bcp trop ez'] },
    { id: 'entry.420482620', type: 'rating', question: 'Le niveau de spam Pronote des profs', labels: ['Y a que dalle sur Pronote', 'C des spambot'] },
    { id: 'entry.967301965', type: 'longtext', question: 'Écris toutes les remarques qui ne peuvent pas se résumer à une note sur 10' },
    { id: 'entry.138021690', type: 'longtext', question: 'Veux-tu faire passer un message au conseil de classe ?' },
    { id: 'entry.311128995', type: 'rating', question: 'À quel point trouves-tu ce questionnaire utile ?' },
    { id: 'entry.930153716', type: 'longtext', question: 'Remarques sur l\'utilité ?' }
  ];

  const totalSteps = questions.length;
  const progress = ((step + 1) / totalSteps) * 100;
  const currentQuestion = questions[step];

  const FORM_ID = '1FAIpQLSdUutK6wUEX2CuTHkbiYTO2EPSoU2jwWQkUPsfaBPzJ2th21w';
  const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  const themes = {
    hacker: {
      bg: 'bg-black',
      text: 'text-green-500',
      border: 'border-green-500/30',
      borderHover: 'hover:border-green-500',
      accentBg: 'bg-green-500',
      accentText: 'text-green-400',
      secondaryBg: 'bg-green-500/10',
      progressBg: 'bg-green-950',
      font: 'font-mono'
    },
    minimalist: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      border: 'border-gray-300',
      borderHover: 'hover:border-gray-900',
      accentBg: 'bg-gray-900',
      accentText: 'text-gray-700',
      secondaryBg: 'bg-gray-100',
      progressBg: 'bg-gray-200',
      font: 'font-sans'
    },
    kawaii: {
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      border: 'border-pink-300',
      borderHover: 'hover:border-pink-500',
      accentBg: 'bg-pink-500',
      accentText: 'text-pink-500',
      secondaryBg: 'bg-pink-100',
      progressBg: 'bg-pink-200',
      font: 'font-sans'
    }
  };

  const t = themes[theme];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      params.set(key, value);
    });

    await fetch(FORM_ACTION, { 
      method: 'POST', 
      body: params, 
      mode: 'no-cors' 
    });

    setSubmitted(true);
  };

  const isStepComplete = () => {
    const value = formData[currentQuestion.id];
    if (currentQuestion.type === 'text' || currentQuestion.type === 'longtext') {
      return value.trim() !== '';
    }
    return value !== '';
  };

  if (submitted) {
    return (
      <div className={`min-h-screen ${t.bg} flex items-center justify-center p-6`}>
        <div className={`border ${t.border} ${t.bg} p-12 max-w-md w-full`}>
          <div className="mb-8 flex justify-center">
            <CheckCircle2 className={`w-16 h-16 ${t.text}`} />
          </div>
          <div className={`${t.font} ${t.text} space-y-2 text-center`}>
            {theme === 'hacker' && (
              <>
                <p className="text-sm opacity-60">$ submit_form --status</p>
                <p className="text-lg">{'>'} SUCCESS</p>
                <p className="text-sm opacity-60">{'>'} Data transmitted</p>
              </>
            )}
            {theme === 'minimalist' && (
              <>
                <h2 className="text-2xl font-bold">Envoyé !</h2>
                <p className="text-sm opacity-60">Merci d'avoir répondu</p>
              </>
            )}
            {theme === 'kawaii' && (
              <>
                <h2 className="text-3xl font-bold">Merci ! ♡</h2>
                <p className="text-sm">Ton formulaire a été envoyé avec succès ! ✨</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${t.bg} ${t.text} flex items-center justify-center p-6 relative`}>
      {/* Theme selector button */}
      <button
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className={`fixed top-4 right-4 z-50 p-2 sm:p-3 border ${t.border} ${t.secondaryBg} ${t.borderHover} transition-all`}
      >
        <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Theme menu */}
      {showThemeMenu && (
        <div className={`fixed top-16 right-4 z-50 border ${t.border} ${t.bg} p-4 space-y-2 shadow-xl`}>
          <button
            onClick={() => { setTheme('hacker'); setShowThemeMenu(false); }}
            className={`w-full px-4 py-2 text-left border ${theme === 'hacker' ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-green-900 text-green-600'}`}
          >
            Hacker
          </button>
          <button
            onClick={() => { setTheme('minimalist'); setShowThemeMenu(false); }}
            className={`w-full px-4 py-2 text-left border ${theme === 'minimalist' ? 'border-gray-900 bg-gray-100 text-gray-900' : 'border-gray-300 text-gray-600'}`}
          >
            Minimalist
          </button>
          <button
            onClick={() => { setTheme('kawaii'); setShowThemeMenu(false); }}
            className={`w-full px-4 py-2 text-left border ${theme === 'kawaii' ? 'border-pink-500 bg-pink-100 text-pink-600' : 'border-pink-300 text-pink-400'}`}
          >
            Kawaii ♡
          </button>
        </div>
      )}

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className={`mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 ${t.font} text-xs sm:text-sm`}>
          {theme === 'hacker' && <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />}
          <span className="opacity-60 truncate">
            {theme === 'hacker' ? 'conseil_de_classe.sh' : 'Conseil de classe'}
          </span>
          <span className="opacity-40 ml-auto whitespace-nowrap">q{step + 1}/{totalSteps}</span>
        </div>

        {/* Progress bar */}
        <div className="mb-6 sm:mb-8">
          <div className={`h-${theme === 'kawaii' ? '2' : '1'} ${t.progressBg} overflow-hidden ${theme === 'kawaii' ? 'rounded-full' : ''}`}>
            <div 
              className={`h-full ${t.accentBg} transition-all duration-700 ease-out ${theme === 'kawaii' ? 'rounded-full' : ''}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={`flex justify-between mt-2 ${t.font} text-xs opacity-60`}>
            <span>{theme === 'hacker' ? `[${Math.round(progress)}%]` : `${Math.round(progress)}%`}</span>
            <span className="whitespace-nowrap">{step + 1} {theme === 'hacker' ? 'of' : '/'} {totalSteps}</span>
          </div>
        </div>

        {/* Main card */}
        <div className={`border ${t.border} ${theme === 'minimalist' ? 'bg-white' : theme === 'kawaii' ? 'bg-white' : t.bg} ${theme === 'kawaii' ? 'rounded-3xl shadow-xl' : ''}`}>
          {theme === 'hacker' && (
            <div className={`border-b ${t.border} px-6 py-3 ${t.font} text-xs flex items-center gap-2`}>
              <span className="opacity-60">$</span>
              <span>question_{step + 1}.sh</span>
            </div>
          )}
          
          <div className="p-4 sm:p-8">
            <div className="animate-fadeIn">
              <div className={`${t.font} mb-6`}>
                {theme === 'hacker' && <span className="text-green-500/60 text-sm">{'> '}</span>}
                <span className={theme === 'kawaii' ? 'text-xl sm:text-2xl font-bold' : theme === 'minimalist' ? 'text-lg sm:text-xl font-semibold' : t.accentText}>
                  {currentQuestion.question}
                </span>
              </div>

              {/* Radio buttons */}
              {currentQuestion.type === 'radio' && (
                <div className={`space-y-2 ${t.font}`}>
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange(currentQuestion.id, option)}
                      className={`w-full px-4 py-3 text-left transition-all border ${theme === 'kawaii' ? 'rounded-2xl' : ''} ${
                        formData[currentQuestion.id] === option
                          ? `${t.border.replace('/30', '')} ${t.secondaryBg} ${t.accentText}`
                          : `${t.border} ${t.borderHover} opacity-60`
                      }`}
                    >
                      {theme === 'hacker' && <span className="opacity-60">[{idx + 1}]</span>} {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Text input */}
              {currentQuestion.type === 'text' && (
                <div className={t.font}>
                  {theme === 'hacker' && <span className="opacity-60 mr-2">{'>'}</span>}
                  <input
                    type="text"
                    value={formData[currentQuestion.id]}
                    onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                    placeholder={theme === 'hacker' ? 'type_here...' : theme === 'kawaii' ? 'Écris ici... ♡' : 'Votre réponse'}
                    className={`${theme === 'minimalist' || theme === 'kawaii' ? 'bg-gray-50' : 'bg-transparent'} border-b ${t.border} focus:${t.border.replace('/30', '')} outline-none ${t.accentText} w-full pb-2 transition-colors ${theme === 'kawaii' ? 'rounded-lg px-4 py-2' : ''}`}
                    autoFocus
                  />
                </div>
              )}

              {/* Rating scale */}
              {currentQuestion.type === 'rating' && (
                <div className={`space-y-4 sm:space-y-6 ${t.font}`}>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="opacity-60 text-xs flex-shrink-0 max-w-[80px] sm:max-w-none">{currentQuestion.labels ? currentQuestion.labels[0] : '1'}</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData[currentQuestion.id]}
                      onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                      className={`flex-1 h-1 ${t.progressBg} appearance-none cursor-pointer slider-${theme}`}
                    />
                    <span className="opacity-60 text-xs flex-shrink-0 max-w-[80px] sm:max-w-none">{currentQuestion.labels ? currentQuestion.labels[1] : '10'}</span>
                  </div>
                  
                  <div className={`border ${t.border} px-4 sm:px-6 py-3 text-center ${theme === 'kawaii' ? 'rounded-3xl' : ''}`}>
                    <span className={`text-3xl sm:text-4xl ${t.accentText} font-bold`}>
                      {formData[currentQuestion.id]}
                    </span>
                    <span className="opacity-60">/10</span>
                  </div>
                  
                  {!currentQuestion.labels && (
                    <div className="grid grid-cols-10 gap-1 text-xs opacity-40 text-center">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div key={num}>{num}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Long text */}
              {currentQuestion.type === 'longtext' && (
                <div className={t.font}>
                  <textarea
                    value={formData[currentQuestion.id]}
                    onChange={(e) => handleChange(currentQuestion.id, e.target.value)}
                    placeholder={theme === 'hacker' ? '// enter your response here...' : theme === 'kawaii' ? 'Écris tes pensées ici... ✨' : 'Votre réponse'}
                    rows="6"
                    className={`w-full ${theme === 'minimalist' || theme === 'kawaii' ? 'bg-gray-50' : 'bg-transparent'} border ${t.border} focus:${t.border.replace('/30', '')} outline-none ${t.accentText} p-4 transition-colors resize-none ${theme === 'kawaii' ? 'rounded-2xl' : ''}`}
                    autoFocus
                  />
                  <div className="text-right text-xs opacity-40 mt-1">
                    {formData[currentQuestion.id].length} {theme === 'hacker' ? 'chars' : 'caractères'}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className={`border-t ${t.border} px-4 sm:px-8 py-4 sm:py-6 flex gap-2 sm:gap-3 ${t.font} text-sm`}>
            {step > 0 && (
              <button
                onClick={handlePrev}
                className={`flex-1 px-3 sm:px-4 py-3 border ${t.border} ${t.borderHover} ${t.secondaryBg.replace('/10', '/5')} ${t.text} transition-all flex items-center justify-center gap-2 ${theme === 'kawaii' ? 'rounded-2xl' : ''}`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{theme === 'hacker' ? 'prev' : 'Précédent'}</span>
              </button>
            )}
            
            {step < totalSteps - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className={`flex-1 px-3 sm:px-4 py-3 transition-all flex items-center justify-center gap-2 ${theme === 'kawaii' ? 'rounded-2xl' : ''} ${
                  isStepComplete()
                    ? `border ${t.border.replace('/30', '')} ${t.secondaryBg} ${t.accentText}`
                    : `border ${t.border} opacity-30 cursor-not-allowed`
                }`}
              >
                <span className="hidden sm:inline">{theme === 'hacker' ? 'next' : 'Suivant'}</span>
                <span className="sm:hidden">→</span>
                <ArrowRight className="w-4 h-4 hidden sm:block" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepComplete()}
                className={`flex-1 px-3 sm:px-4 py-3 transition-all flex items-center justify-center gap-2 ${theme === 'kawaii' ? 'rounded-2xl' : ''} ${
                  isStepComplete()
                    ? `${t.accentBg} ${theme === 'hacker' ? 'text-black' : 'text-white'} font-semibold`
                    : `border ${t.border} opacity-30 cursor-not-allowed`
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">{theme === 'hacker' ? 'submit' : 'Envoyer'}</span>
              </button>
            )}
          </div>
        </div>

        <div className={`mt-6 text-center ${t.font} text-xs opacity-40`}>
          {theme === 'hacker' ? '[encrypted connection to google sheets]' : theme === 'kawaii' ? '✨ Envoyé avec amour vers Google Sheets ✨' : 'Données sécurisées'}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        
        .slider-hacker::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #22c55e;
          cursor: pointer;
          border: 2px solid #000;
        }
        .slider-hacker::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #22c55e;
          cursor: pointer;
          border: 2px solid #000;
          border-radius: 0;
        }
        
        .slider-minimalist::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #111827;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider-minimalist::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #111827;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
        
        .slider-kawaii::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #ec4899;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }
        .slider-kawaii::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #ec4899;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </div>
  );
}
