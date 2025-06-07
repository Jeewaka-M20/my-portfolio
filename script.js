function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume/resume.pdf';
  link.download = 'YourName_Resume.pdf';
  link.click();
}
