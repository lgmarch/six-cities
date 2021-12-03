import {toast} from 'react-toastify';

export function showingError(error: string): void {
  toast.info(
    `${error}`,
    {progress: undefined});
}
