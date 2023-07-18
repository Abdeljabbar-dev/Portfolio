import { ref } from 'vue'
export default function useMethods () {
  const userTheme = ref('light-theme')
  function toggleTheme () {
    const activeTheme = localStorage.getItem('user-theme')
    if (activeTheme === 'light-theme') {
      this.setTheme('dark-theme')
    } else {
      this.setTheme('light-theme')
    }
    console.log('activeTheme', activeTheme)
  }

  function getTheme () {
    return localStorage.getItem('user-theme')
  }

  function setTheme (theme) {
    localStorage.setItem('user-theme', theme)
    userTheme.value = theme
    document.documentElement.className = theme
  }

  function getMediaPreference () {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    if (hasDarkPreference) {
      return 'dark-theme'
    } else {
      return 'light-theme'
    }
  }

  return { userTheme, toggleTheme, getTheme, getMediaPreference, setTheme }
}
