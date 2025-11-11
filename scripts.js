// 1. "더 알아보기" 버튼 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', () => {
    const moreInfoBtn = document.getElementById('more-info-btn');
    
    // 버튼 클릭 시 회사 소개 섹션으로 부드럽게 스크롤
    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', () => {
            document.getElementById('company').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // 2. 채용 정보 동적 업데이트 (과제용 시뮬레이션)
    const recruitMessage = document.getElementById('recruit-message');
    if (recruitMessage) {
        // 2초 후에 메시지 업데이트
        setTimeout(() => {
            const currentRecruit = "? 현재 2025년 하반기 신입/경력 채용이 진행 중입니다. (R&D 및 공정기술)";
            recruitMessage.textContent = currentRecruit;
            recruitMessage.style.color = '#e67e22'; // 색상 변경
            recruitMessage.style.fontWeight = 'bold';
        }, 2000);
    }
});

// 3. 콘솔에 메시지 출력 (스크립트 작동 확인용)
console.log("하나머티리얼즈 과제 웹사이트 스크립트가 실행되었습니다.");