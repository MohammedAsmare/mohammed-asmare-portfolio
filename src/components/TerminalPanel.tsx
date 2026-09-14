import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Code2, Play, CheckCircle2, ShieldCheck, Database, RefreshCw, Copy, Check } from 'lucide-react';

export const TerminalPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'flow' | 'code'>('terminal');
  const [copied, setCopied] = useState(false);
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testLogs, setTestLogs] = useState<string[]>([]);

  const sampleCode = `@RestController
@RequestMapping("/api/v1/integrations/bank")
@Validated
public class BankIntegrationController {

    private final BankService bankService;
    private final MetricsCollector metrics;

    @PostMapping("/transfer")
    public ResponseEntity<TransactionResult> processTransfer(
            @Valid @RequestBody BankTransferRequest request) {
        
        metrics.increment("bank.transfer.attempts");
        TransactionResult result = bankService.executeSecureTransfer(request);
        
        return ResponseEntity.ok(result);
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulatedTest = () => {
    setIsRunningTest(true);
    setTestLogs(['[INFO] Initializing Integration Test Runner v3.2...']);

    const steps = [
      '[INFO] Connecting to Spring Boot Gateway (port 8080)... OK',
      '[INFO] Authenticating Bearer Token with OAuth2 Service... PASS',
      '[TEST] POST /api/v1/integrations/bank/transfer (200 OK - 24ms)',
      '[TEST] Validating PostgreSQL ACID transaction log... VERIFIED',
      '[TEST] Checking Prometheus metric "bank_transfer_success_total"... +1',
      '[SUCCESS] All 14 System Integration Tests (SIT) PASSED! (0 failures)'
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setTestLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunningTest(false);
        }
      }, (idx + 1) * 450);
    });
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-card border border-slate-700/60 shadow-2xl dark:shadow-cyan-950/20 text-slate-200">
      {/* Header bar with mac-like buttons and tabs */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">mohammed@addis-node-01:~</span>
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-slate-950/60 rounded-lg p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
              activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab('flow')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
              activeTab === 'flow' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>API Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
              activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 min-h-[340px] bg-[#0b0f19] font-mono text-xs sm:text-sm relative">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="text-slate-400 leading-relaxed">
                <span className="text-emerald-400">mohammed@addis-node-01</span>:<span className="text-cyan-400">~/profile</span>$ mohammed --status
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800/80 space-y-2 text-slate-300">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-200">SYSTEM ARCHITECTURE STATUS</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    OPERATIONAL (99.9% Uptime)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <div>
                    <span className="text-slate-400">Primary Discipline:</span>{' '}
                    <span className="text-cyan-300 font-semibold">Full Stack + QA + DevOps</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Location:</span>{' '}
                    <span className="text-slate-200">Addis Ababa, Ethiopia</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Bank Integrations:</span>{' '}
                    <span className="text-emerald-400 font-semibold">20+ Enterprise Banks</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Test Pass Rate:</span>{' '}
                    <span className="text-emerald-400 font-semibold">99.8% (SIT Verified)</span>
                  </div>
                </div>
              </div>

              {/* Action runner */}
              <div className="pt-2">
                <button
                  onClick={handleRunSimulatedTest}
                  disabled={isRunningTest}
                  className="px-3.5 py-2 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 rounded-md flex items-center gap-2 font-mono text-xs transition-all disabled:opacity-50"
                >
                  {isRunningTest ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Executing Integration Test Suite...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-cyan-300" />
                      <span>Run Live SIT Test Suite</span>
                    </>
                  )}
                </button>
              </div>

              {testLogs.length > 0 && (
                <div className="mt-3 bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5 max-h-[140px] overflow-y-auto">
                  {testLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.includes('[SUCCESS]')
                          ? 'text-emerald-400 font-semibold'
                          : log.includes('[TEST]')
                          ? 'text-cyan-300'
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'flow' && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="text-xs text-slate-400 mb-2">
                // Safaricom Ethiopia & 20+ Bank Integration Topology
              </div>

              {/* Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200 text-xs">Client / App</span>
                  <span className="text-[10px] text-slate-400">React & Mobile</span>
                </div>

                <div className="p-3 bg-slate-900 border border-cyan-500/40 rounded-xl flex flex-col items-center justify-center relative shadow-lg shadow-cyan-950/40">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-2">
                    <Cpu className="w-4 h-4 animate-pulse" />
                  </div>
                  <span className="font-semibold text-cyan-300 text-xs">Spring Gateway</span>
                  <span className="text-[10px] text-cyan-400/80">OAuth2 & Throttling</span>
                </div>

                <div className="p-3 bg-slate-900 border border-emerald-500/40 rounded-xl flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-emerald-300 text-xs">SIT & QA Validation</span>
                  <span className="text-[10px] text-emerald-400/80">Postman / Newman</span>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200 text-xs">20+ Bank APIs</span>
                  <span className="text-[10px] text-slate-400">PostgreSQL / M-Pesa</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="flex justify-between text-slate-300 font-semibold border-b border-slate-800 pb-1">
                  <span>LIVE TRAFFIC MONITOR</span>
                  <span className="text-emerald-400">Active (Prometheus Hook)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>POST /api/v1/bank/settlement</span>
                  <span className="text-cyan-400">200 OK (18ms)</span>
                </div>
                <div className="flex justify-between">
                  <span>GET /api/v1/mpesa/status</span>
                  <span className="text-cyan-400">200 OK (12ms)</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>BankIntegrationController.java</span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <code>{sampleCode}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer bar */}
      <div className="bg-slate-900/90 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>CI/CD Pipeline: PASS</span>
        </span>
        <span className="text-cyan-400">Docker + Kubernetes Ready</span>
      </div>
    </div>
  );
};
