import { useState, useEffect } from 'react';
import { State } from '@/types';
import { STATES } from '@/constants/states';

export function useStateData(stateId: string) {
  const [stateData, setStateData] = useState<State | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = STATES.find((state) => state.id === stateId);
    setStateData(data || null);
    setLoading(false);
  }, [stateId]);

  return { stateData, loading };
}