export interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: string;
}
