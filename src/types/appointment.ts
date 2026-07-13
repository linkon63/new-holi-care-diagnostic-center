export interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: string;
}

export interface AppointmentFormProps {
  showHeader?: boolean;
  onBookClick?: () => void;
}
