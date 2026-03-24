"use client";

import { useAuth } from "@/hooks/useAuth";
import { LogoutModal } from "@/components/ui/logout-modal";

export function LogoutModalWrapper() {
  const { isLogoutModalOpen, closeLogoutModal, confirmLogout } = useAuth();

  return (
    <LogoutModal
      isOpen={isLogoutModalOpen}
      onClose={closeLogoutModal}
      onConfirm={confirmLogout}
    />
  );
}
