import React, { useState } from 'react';

interface SkillLogoProps {
  skillName: string;
  className?: string;
}

export const SkillLogo: React.FC<SkillLogoProps> = ({ skillName, className = 'w-7 h-7' }) => {
  const [hasError, setHasError] = useState(false);
  const norm = skillName.toLowerCase();

  const getLogoSrc = (): string => {
    if (norm.includes('spring') || norm.includes('java')) return '/skills/spring.svg';
    if (norm.includes('python') || norm.includes('fastapi')) return '/skills/python.svg';
    if (norm.includes('react') || norm.includes('typescript')) return '/skills/react.svg';
    if (norm.includes('kubernetes')) return '/skills/kubernetes.svg';
    if (norm.includes('docker')) return '/skills/docker.svg';
    if (norm.includes('postgres') || norm.includes('database') || norm.includes('sql')) return '/skills/postgresql.svg';
    if (norm.includes('postman') || norm.includes('testing') || norm.includes('sit') || norm.includes('qa')) return '/skills/postman.svg';
    if (norm.includes('jenkins') || norm.includes('ci/cd')) return '/skills/jenkins.svg';
    if (norm.includes('tibco') || norm.includes('integration') || norm.includes('middleware')) return '/skills/tibco.svg';
    if (norm.includes('prometheus') || norm.includes('grafana') || norm.includes('monitoring')) return '/skills/prometheus.svg';
    return '/skills/java.svg';
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center font-bold text-xs text-cyan-500 ${className}`}>
        {skillName.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={getLogoSrc()}
      alt={`${skillName} logo`}
      className={`${className} object-contain transition-transform duration-300`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};
