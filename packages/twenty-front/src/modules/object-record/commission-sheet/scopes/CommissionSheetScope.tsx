import { ReactNode } from 'react';

import { CommissionSheetScopeInternalContext } from '@/object-record/commission-sheet/scopes/CommissionSheetScopeInternalContext';

type CommissionSheetScopeProps = {
  children: ReactNode;
  commissionSheetScopeId: string;
};

export const CommissionSheetScope = ({
  children,
  commissionSheetScopeId,
}: CommissionSheetScopeProps) => {
  return (
    <CommissionSheetScopeInternalContext.Provider
      value={{
        scopeId: commissionSheetScopeId,
      }}
    >
      {children}
    </CommissionSheetScopeInternalContext.Provider>
  );
};
