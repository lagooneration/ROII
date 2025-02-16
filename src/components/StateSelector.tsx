import Link from 'next/link';
import { STATES } from '@/constants/states';

export default function StateSelector() {
  return (
    <nav className="p-4">
      <ul className="flex flex-wrap gap-4">
        {STATES.map((state) => (
          <li key={state.id} className="relative">
            {state.disabled ? (
              <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed">
                {state.name}
                <span className="absolute -bottom-6 left-0 text-sm text-gray-500 whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            ) : (
              <Link 
                href={`/${state.id}`}
                className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {state.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
} 