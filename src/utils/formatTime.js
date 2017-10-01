export default function formatTime(num) {
  return Math.floor(num).toString().padStart(2, '0');
}