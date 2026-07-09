export const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const divisionDistricts: Record<string, string[]> = {
  Dhaka: [
    "Dhaka", "Narayanganj", "Gazipur", "Tangail", "Faridpur",
    "Kishoreganj", "Munshiganj", "Manikganj", "Narsingdi",
    "Gopalganj", "Madaripur", "Shariatpur", "Rajbari",
  ],
  Chittagong: [
    "Chittagong", "Cox's Bazar", "Comilla", "Noakhali", "Feni",
    "Lakshmipur", "Chandpur", "Brahmanbaria", "Rangamati",
    "Khagrachhari", "Bandarban",
  ],
  Rajshahi: [
    "Rajshahi", "Bogra", "Pabna", "Sirajganj", "Natore",
    "Naogaon", "Joypurhat", "Chapainawabganj",
  ],
  Khulna: [
    "Khulna", "Jessore", "Kushtia", "Magura", "Jhenaidah",
    "Satkhira", "Bagerhat", "Chuadanga", "Meherpur", "Narail",
  ],
  Barisal: [
    "Barisal", "Pirojpur", "Patuakhali", "Bhola", "Barguna", "Jhalokati",
  ],
  Sylhet: [
    "Sylhet", "Sunamganj", "Habiganj", "Maulvibazar",
  ],
  Rangpur: [
    "Rangpur", "Nilphamari", "Dinajpur", "Lalmonirhat",
    "Kurigram", "Thakurgaon", "Panchagarh", "Gaibandha",
  ],
  Mymensingh: [
    "Mymensingh", "Sherpur", "Netrokona", "Jamalpur",
  ],
};

export const divisions = Object.keys(divisionDistricts);

export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getDate()} ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}
