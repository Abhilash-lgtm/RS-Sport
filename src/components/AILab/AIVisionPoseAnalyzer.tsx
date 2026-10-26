import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Eye, Sparkles, CheckCircle2, Sliders } from 'lucide-react';

type DrillMode = 'sprint' | 'jump' | 'agility';

export const AIVisionPoseAnalyzer: React.FC = () => {
  const [activeMode, setActiveMode] = useState<DrillMode>('sprint');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showWireframe, setShowWireframe] = useState<boolean>(true);
  const [showAngles, setShowAngles] = useState<boolean>(true);
  
  // Real-time telemetry state
  const [currentKneeAngle, setCurrentKneeAngle] = useState<number>(88);
  const [currentTrunkAngle, setCurrentTrunkAngle] = useState<number>(14);
  const [cadence, setCadence] = useState<number>(182);
  const [symmetryIndex, setSymmetryIndex] = useState<number>(97);
  const [liveCoachFeedback, setLiveCoachFeedback] = useState<string>(
    'Optimal forward lean (14°). Powerful knee drive detected with minimal ground contact braking.'
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const frameCounterRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let localFrame = 0;

    const render = () => {
      if (isPlaying) {
        frameCounterRef.current += playbackSpeed;
        localFrame = frameCounterRef.current;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // Clean bright biomechanics laboratory background
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Light grid lines
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Athletic track ground line (Red/Crimson Track)
      const groundY = height - 60;
      ctx.strokeStyle = '#8a1538';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Clean white track lane marking
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([12, 10]);
      ctx.beginPath();
      ctx.moveTo(0, groundY + 25);
      ctx.lineTo(width, groundY + 25);
      ctx.stroke();
      ctx.setLineDash([]);

      // Compute kinematic positions based on mode
      const t = (localFrame * 0.04);
      let hipX = width * 0.48;
      let hipY = groundY - 140;

      let trunkLean = 14;
      let kneeAngleVal = 90;

      if (activeMode === 'sprint') {
        const cycle = Math.sin(t);
        const cycleCos = Math.cos(t);

        hipY = groundY - 145 + Math.sin(t * 2) * 8;
        trunkLean = 14 + Math.sin(t) * 2;

        const headX = hipX + Math.sin((trunkLean * Math.PI) / 180) * 80;
        const headY = hipY - 90;
        const shoulderX = hipX + Math.sin((trunkLean * Math.PI) / 180) * 45;
        const shoulderY = hipY - 60;

        // Front leg
        const fKneeX = hipX + 35 + cycle * 40;
        const fKneeY = hipY + 50 - Math.max(0, cycleCos) * 45;
        const fFootX = fKneeX + cycleCos * 30;
        const fFootY = Math.min(groundY, fKneeY + 55 + cycle * 10);

        // Back leg
        const bKneeX = hipX - 35 - cycle * 35;
        const bKneeY = hipY + 50 - Math.max(0, -cycleCos) * 45;
        const bFootX = bKneeX - cycleCos * 30;
        const bFootY = Math.min(groundY, bKneeY + 55 - cycle * 10);

        // Arms
        const leftElbowX = shoulderX - cycle * 35;
        const leftElbowY = shoulderY + 30;
        const leftHandX = leftElbowX - cycle * 30;
        const leftHandY = leftElbowY - 20;

        const rightElbowX = shoulderX + cycle * 35;
        const rightElbowY = shoulderY + 30;
        const rightHandX = rightElbowX + cycle * 30;
        const rightHandY = rightElbowY - 20;

        kneeAngleVal = Math.round(82 + Math.abs(cycle) * 28);
        setCurrentKneeAngle(kneeAngleVal);
        setCurrentTrunkAngle(Math.round(trunkLean));

        if (showWireframe) {
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';

          // Torso & Head (Deep Navy)
          ctx.strokeStyle = '#0f2b5c';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(shoulderX, shoulderY);
          ctx.lineTo(headX, headY);
          ctx.stroke();

          // Left Arm
          ctx.strokeStyle = '#3b82f6';
          ctx.beginPath();
          ctx.moveTo(shoulderX, shoulderY);
          ctx.lineTo(leftElbowX, leftElbowY);
          ctx.lineTo(leftHandX, leftHandY);
          ctx.stroke();

          // Right Arm
          ctx.strokeStyle = '#1d4ed8';
          ctx.beginPath();
          ctx.moveTo(shoulderX, shoulderY);
          ctx.lineTo(rightElbowX, rightElbowY);
          ctx.lineTo(rightHandX, rightHandY);
          ctx.stroke();

          // Back Leg (Crimson)
          ctx.strokeStyle = '#dc2626';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(bKneeX, bKneeY);
          ctx.lineTo(bFootX, bFootY);
          ctx.stroke();

          // Front Leg (Emerald Drive)
          ctx.strokeStyle = '#059669';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(fKneeX, fKneeY);
          ctx.lineTo(fFootX, fFootY);
          ctx.stroke();

          // Joints
          const joints = [
            { x: headX, y: headY, r: 12, fill: '#ffffff', stroke: '#0f2b5c' },
            { x: shoulderX, y: shoulderY, r: 6, fill: '#1d4ed8', stroke: '#0f2b5c' },
            { x: hipX, y: hipY, r: 7, fill: '#d97706', stroke: '#0f2b5c' },
            { x: fKneeX, y: fKneeY, r: 6, fill: '#059669', stroke: '#064e3b' },
            { x: fFootX, y: fFootY, r: 5, fill: '#059669', stroke: '#064e3b' },
            { x: bKneeX, y: bKneeY, r: 6, fill: '#dc2626', stroke: '#7f1d1d' },
            { x: bFootX, y: bFootY, r: 5, fill: '#dc2626', stroke: '#7f1d1d' },
            { x: rightElbowX, y: rightElbowY, r: 5, fill: '#1d4ed8', stroke: '#1e3a8a' },
            { x: rightHandX, y: rightHandY, r: 4, fill: '#1d4ed8', stroke: '#1e3a8a' },
            { x: leftElbowX, y: leftElbowY, r: 5, fill: '#3b82f6', stroke: '#1e3a8a' }
          ];

          joints.forEach((j) => {
            ctx.fillStyle = j.fill;
            ctx.beginPath();
            ctx.arc(j.x, j.y, j.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = j.stroke;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          });

          // Angle Overlay
          if (showAngles) {
            ctx.strokeStyle = '#b45309';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(fKneeX, fKneeY, 20, 0, Math.PI * 0.7);
            ctx.stroke();

            ctx.fillStyle = '#b45309';
            ctx.font = 'bold 12px monospace';
            ctx.fillText(`${kneeAngleVal}°`, fKneeX + 24, fKneeY - 5);

            ctx.strokeStyle = '#be185d';
            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(hipX, hipY);
            ctx.lineTo(hipX, hipY - 100);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = '#be185d';
            ctx.fillText(`${Math.round(trunkLean)}° Lean`, hipX - 55, hipY - 40);
          }
        }
      } else if (activeMode === 'jump') {
        const jumpPhase = Math.sin(t * 1.5);
        const jumpH = Math.max(0, jumpPhase) * 90;
        hipY = groundY - 90 - jumpH;

        const isCrouching = jumpPhase < 0;
        const kneeBend = isCrouching ? Math.abs(jumpPhase) * 45 : 10;

        const headX = hipX;
        const headY = hipY - 95;
        const shoulderX = hipX;
        const shoulderY = hipY - 60;

        const kneeX = hipX + 10;
        const kneeY = hipY + 45 + kneeBend;
        const footX = hipX;
        const footY = Math.min(groundY, hipY + 95 + kneeBend);

        kneeAngleVal = Math.round(160 - kneeBend * 1.5);
        setCurrentKneeAngle(kneeAngleVal);
        setCurrentTrunkAngle(isCrouching ? 22 : 5);

        if (showWireframe) {
          ctx.lineWidth = 5;
          ctx.strokeStyle = '#0f2b5c';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(shoulderX, shoulderY);
          ctx.lineTo(headX, headY);
          ctx.stroke();

          ctx.strokeStyle = '#059669';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(kneeX, kneeY);
          ctx.lineTo(footX, footY);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(headX, headY, 14, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#0f2b5c';
          ctx.stroke();

          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.moveTo(hipX - 60, groundY - 180);
          ctx.lineTo(hipX + 60, groundY - 180);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = '#b45309';
          ctx.font = 'bold 11px monospace';
          ctx.fillText(`Peak Elevation: ${Math.round(jumpH)}cm`, hipX - 55, groundY - 190);
        }
      } else {
        const sway = Math.sin(t * 2) * 50;
        hipX = width * 0.48 + sway;
        hipY = groundY - 110;

        const headX = hipX - sway * 0.2;
        const headY = hipY - 80;
        const shoulderX = hipX - sway * 0.1;
        const shoulderY = hipY - 50;

        const leftKneeX = hipX - 25;
        const leftKneeY = hipY + 45;
        const leftFootX = hipX - 45;
        const leftFootY = groundY;

        const rightKneeX = hipX + 25;
        const rightKneeY = hipY + 45;
        const rightFootX = hipX + 45;
        const rightFootY = groundY;

        setCurrentKneeAngle(112);
        setCurrentTrunkAngle(Math.round(Math.abs(sway) * 0.4));

        if (showWireframe) {
          ctx.lineWidth = 5;
          ctx.strokeStyle = '#be185d';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(shoulderX, shoulderY);
          ctx.lineTo(headX, headY);
          ctx.stroke();

          ctx.strokeStyle = '#1d4ed8';
          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(leftKneeX, leftKneeY);
          ctx.lineTo(leftFootX, leftFootY);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(hipX, hipY);
          ctx.lineTo(rightKneeX, rightKneeY);
          ctx.lineTo(rightFootX, rightFootY);
          ctx.stroke();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(headX, headY, 13, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#0f2b5c';
          ctx.stroke();
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, activeMode, showWireframe, showAngles]);

  const handleModeChange = (mode: DrillMode) => {
    setActiveMode(mode);
    if (mode === 'sprint') {
      setCadence(184);
      setSymmetryIndex(97);
      setLiveCoachFeedback('Sprint Mechanics: Front knee drive 88° optimal, aggressive backward arm swing preventing shoulder rotation.');
    } else if (mode === 'jump') {
      setCadence(0);
      setSymmetryIndex(94);
      setLiveCoachFeedback('Vertical Jump: Triple extension (hips, knees, ankles) achieved. Land with knees aligned over toes to protect ACL.');
    } else {
      setCadence(168);
      setSymmetryIndex(98);
      setLiveCoachFeedback('Agility Cut: Low center of mass during deceleration. Braking steps absorb impact through midfoot safely.');
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
      {/* Title Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            Computer Vision & Biomechanics Rig
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            AI Sprint & Movement Pose Form Analyzer
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Real-time skeletal joint tracking, kinetic angle telemetry, and instant injury-prevention coaching cues for young sprinters.
          </p>
        </div>

        {/* Clean Drill Mode Tabs */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => handleModeChange('sprint')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === 'sprint' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sprint Stride
          </button>
          <button
            onClick={() => handleModeChange('jump')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === 'jump' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vertical Jump
          </button>
          <button
            onClick={() => handleModeChange('agility')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
              activeMode === 'agility' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Agility Shuttle Cut
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas on Left, Telemetry on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Canvas Simulation */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-sm">
          {/* Top Canvas HUD overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono z-10 pointer-events-none">
            <span className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shadow-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              LIVE POSE TRACKING (60 FPS)
            </span>
            <span className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-blue-700 border border-blue-200 shadow-xs font-bold">
              AI SKELETAL RIG
            </span>
          </div>

          <canvas
            ref={canvasRef}
            width={580}
            height={360}
            className="w-full h-auto block"
          />

          {/* Canvas Controls Bar */}
          <div className="bg-slate-50 border-t border-slate-200 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 transition-colors shadow-2xs cursor-pointer"
                title={isPlaying ? 'Pause simulation' : 'Play simulation'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  frameCounterRef.current = 0;
                }}
                className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 transition-colors shadow-2xs cursor-pointer"
                title="Restart movement loop"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] text-slate-600 shadow-2xs">
                <span className="font-semibold">Speed:</span>
                {[0.5, 1, 1.5].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      playbackSpeed === spd ? 'bg-blue-600 text-white font-bold' : 'hover:text-slate-900'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-slate-700 cursor-pointer select-none font-medium">
                <input
                  type="checkbox"
                  checked={showWireframe}
                  onChange={(e) => setShowWireframe(e.target.checked)}
                  className="accent-red-600"
                />
                <span>Wireframe</span>
              </label>

              <label className="flex items-center gap-1.5 text-slate-700 cursor-pointer select-none font-medium">
                <input
                  type="checkbox"
                  checked={showAngles}
                  onChange={(e) => setShowAngles(e.target.checked)}
                  className="accent-red-600"
                />
                <span>Kinematic Angles</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right: AI Biomechanical Telemetry & Feedback */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                Kinetic Angle Dashboard
              </span>
              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                Pass: Olympic Grade
              </span>
            </h4>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block mb-1 font-medium">Knee Flexion Drive</span>
                <span className="text-2xl font-black text-amber-600 font-mono">{currentKneeAngle}°</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Optimal: 85° - 95°</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block mb-1 font-medium">Trunk Lean Angle</span>
                <span className="text-2xl font-black text-blue-600 font-mono">{currentTrunkAngle}°</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Optimal: 12° - 16°</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block mb-1 font-medium">Stride Cadence</span>
                <span className="text-2xl font-black text-emerald-600 font-mono">
                  {cadence > 0 ? `${cadence} SPM` : 'N/A'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Contact: 0.11s</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block mb-1 font-medium">L/R Leg Symmetry</span>
                <span className="text-2xl font-black text-rose-600 font-mono">{symmetryIndex}%</span>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">Balanced Chain</span>
              </div>
            </div>

            {/* Live AI Coach Feedback */}
            <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>Coach RA Biomechanical Critique:</span>
              </div>
              <p className="text-xs text-blue-950 leading-relaxed font-medium">
                "{liveCoachFeedback}"
              </p>
            </div>

            {/* Injury Prevention Alert */}
            <div className="bg-emerald-50/80 border border-emerald-200 p-3.5 rounded-xl flex items-start gap-2.5 text-xs text-emerald-900 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950">Growth Plate Safety: Zero High-Impact Joint Shock Detected.</strong>
                <p className="text-emerald-800 text-[11px] mt-0.5">
                  Foot contact remains directly beneath the center of mass, mitigating shin splint strain by 40%.
                </p>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between shadow-2xs">
              <span>Have a video of your child sprinting?</span>
              <span className="text-blue-600 font-bold cursor-pointer hover:underline">
                Upload in Academy Center
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
