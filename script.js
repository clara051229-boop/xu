// 鼓励语句数组
const encouragementQuotes = [
    "慢慢来，比较快。"——龙应台,
    "备考是长跑，不是冲刺，保持自己的节奏就好。",
    "你走的每一步，都算数。",
    "成功不是最终目标，失败也不是末日：最重要的是继续前进的勇气。"——温斯顿·丘吉尔,
    "哪怕今天只背了十个单词，也是十个单词的进步。",
    "别着急，你正在扎根。",
    "千里之行，始于足下。"——老子,
    "累了就说明你在走上坡路。",
    "今天不想学，所以才学了一点点，已经很棒了。",
    "不要因路远而踌躇，只要走，终将到达。"——蒙古谚语,
    "坚持本身就是一种天赋。",
    "今天的你，比昨天又多知道了一个知识点，值得拍拍手。",
    "不必每分钟都在学，但学的每分钟都要在。",
    "涓滴之水终可磨损大石，不是由于它力量强大，而是由于昼夜不舍的滴坠。"——贝多芬,
    "哪怕进度慢一点，也没关系。",
    "你已经坚持了这么久，真的很不容易。",
    "学习像吃饭，一口一口，才能饱。",
    "今天的努力，会在某一天突然开花。",
    "即使今天效率不高，你也在靠近目标。",
    "不怕慢，只怕站。"——中国谚语,
    "休息不是偷懒，是给大脑充电。",
    "偶尔停下来，是为了走更远的路。",
    "休息的人才会工作。"——阿拉伯谚语,
    "累了就伸个懒腰，喝口水，看看窗外。",
    "照顾好身体，它陪着你一起努力呢。",
    "学不下去的时候，就出去走一走。",
    "允许自己偶尔慢一点，这不是错。",
    "困了就睡，醒了再学，别在床上硬撑。",
    "偶尔放空自己，也是一种必要的休息。",
    "闲暇是做一切有益事情的时间。"——康德,
    "今天有没有好好吃饭？记得对自己好一点。",
    "哪怕天塌下来，也要先睡个好觉。",
    "备考的日子里，也别忘了爱自己。",
    "把压力放在门外，把温暖带进心里。",
    "累了就歇一会儿，已经做得很棒了。",
    "你的身体和心，比很多东西更重要。",
    "允许自己放松一天，明天会更有力量。",
    "不想学的时候就发发呆，我陪着你。",
    "生活除了备考，还有阳光、微风和好吃的。",
    "懂得休息，才懂得前进。"——塞涅卡,
    "错题是帮你进步的阶梯，不是耻辱。",
    "不必完美，只需要继续。",
    "允许自己犯错，允许自己调整。",
    "状态有起伏很正常，像天气一样。",
    "你不需要时时刻刻打鸡血，平静也是一种力量。",
    "今天学不进去？没关系，明天又是新的一天。",
    "分数不理想，只是帮你发现了盲区。",
    "别和别人比，只和昨天的自己比。",
    "完美的准备是进步的敌人。"——伏尔泰,
    "偶尔做得不够好，不代表你不够好。",
    "不会的题，正好是今天的学习目标。",
    "忘掉的知识点，再背一遍就记住了。",
    "焦虑的时候，深呼吸，对自己说：放轻松。",
    "你已经做得够好了，不需要再苛求自己。",
    "哪怕偶尔摆烂，明天的太阳照常升起。",
    "不完美才是学习的常态。",
    "允许自己有时候不想努力。",
    "不用每一分钟都高效，做个人就好。",
    "对自己温柔一点，你不过是宇宙的孩子。"——佚名,
    "你已经很努力了，可以歇口气。",
    "你不是一个人在战斗。",
    "这个世界上，有很多人理解你的辛苦。",
    "家人朋友以及我的支持，一直都在。",
    "累了的时候，记得有人在为你加油。",
    "你值得所有的温柔和鼓励。",
    "无论你今天学了多少，我都为你骄傲。",
    "你是一个完整的人，不只是考生。",
    "备考路上，你不是孤岛。",
    "有人懂你的疲惫，有人为你心疼。",
    "哪怕全世界都不知道你在努力，我知道。",
    "你的付出，看得见的人会看见。",
    "朋友是另一个自己。"——西塞罗,
    "你的感受很重要，值得被听见。",
    "即使一个人坐在书桌前，也不是一个人。",
    "有人默默为你祝福。",
    "你正在一步步走向你想去的地方。",
    "路是自己走出来的，机会是自己创造出来的。",
    "你想要的，时间都会慢慢给你。",
    "明天又是新的一天，有新的可能。",
    "每一份努力，都在悄悄改变你。",
    "希望在前方，路在脚下。",
    "徐老师配得上这一路所有的美好。",
    "不管结果如何，你都已经收获了成长。",
    "未来还有无数种可能。",
    "你已经在成为更好的自己的路上了。",
    "希望是清醒时的梦想。"——亚里士多德,
    "黑暗中只要有一点光，就能走下去。",
    "你心里那团火，不要让它熄灭。",
    "我会一直在这里，陪你到你想去的地方。",
    "哪怕今天只翻开了书，也是一个好的开始。",
    "学习像攒硬币，一枚一枚攒起来，总会有满满一罐。",
    "累的时候，就看看窗外，树在那里，云也在那里。",
    "偶尔对自己说一句：今天这样已经很好了。",
    "花会沿路盛开，你以后的路也是。"
];

// 全局变量
let timerInterval;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// 初始化函数
function init() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    displayRandomQuote();
    loadMilestoneData();
    loadMessages();
    loadTaskStatus();
    
    // 事件监听器
    document.getElementById('change-quote').addEventListener('click', displayRandomQuote);
    document.getElementById('start-timer').addEventListener('click', startTimer);
    document.getElementById('pause-timer').addEventListener('click', pauseTimer);
    document.getElementById('reset-timer').addEventListener('click', resetTimer);
    document.getElementById('complete-section').addEventListener('click', completeSection);
    document.getElementById('save-message').addEventListener('click', saveMessage);
    document.getElementById('task-1').addEventListener('change', saveTaskStatus);
}

// 更新当前时间
function updateCurrentTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('current-time').textContent = now.toLocaleDateString('zh-CN', options);
}

// 显示随机鼓励语
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * encouragementQuotes.length);
    document.getElementById('daily-quote').textContent = encouragementQuotes[randomIndex];
}

// 开始计时器
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

// 暂停计时器
function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        saveTimerData();
    }
}

// 重置计时器
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('timer-display').textContent = '00:00:00';
    saveTimerData();
}

// 更新计时器显示
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = formattedTime;
}

// 完成一小节
function completeSection() {
    const milestoneData = getMilestoneData();
    milestoneData.completedTasksToday += 1;
    milestoneData.totalFocusTime += elapsedTime;
    saveMilestoneData(milestoneData);
    loadMilestoneData();
    
    // 重置计时器
    resetTimer();
    
    // 显示提示
    alert('已完成一小节！继续加油！');
}

// 保存留言
function saveMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message) {
        const messages = getMessages();
        messages.push({
            content: message,
            date: new Date().toLocaleString('zh-CN')
        });
        localStorage.setItem('messages', JSON.stringify(messages));
        loadMessages();
        messageInput.value = '';
    }
}

// 加载留言
function loadMessages() {
    const messages = getMessages();
    const messageWall = document.getElementById('message-wall');
    
    if (messages.length === 0) {
        messageWall.innerHTML = '<p class="text-center text-muted">还没有留言，写下你的第一句话吧～</p>';
        return;
    }
    
    messageWall.innerHTML = messages.map(msg => `
        <div class="message-item">
            <div class="message-date">${msg.date}</div>
            <div class="message-content">${msg.content}</div>
        </div>
    `).join('');
}

// 保存任务状态
function saveTaskStatus() {
    const task1Checked = document.getElementById('task-1').checked;
    localStorage.setItem('task1Status', task1Checked);
}

// 加载任务状态
function loadTaskStatus() {
    const task1Status = localStorage.getItem('task1Status') === 'true';
    document.getElementById('task-1').checked = task1Status;
}

// 保存计时器数据
function saveTimerData() {
    const timerData = {
        elapsedTime,
        isRunning
    };
    localStorage.setItem('timerData', JSON.stringify(timerData));
}

// 加载计时器数据
function loadTimerData() {
    const timerData = localStorage.getItem('timerData');
    if (timerData) {
        const data = JSON.parse(timerData);
        elapsedTime = data.elapsedTime;
        isRunning = data.isRunning;
        
        if (isRunning) {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(updateTimer, 1000);
        }
        
        updateTimer();
    }
}

// 获取里程碑数据
function getMilestoneData() {
    const data = localStorage.getItem('milestoneData');
    if (data) {
        return JSON.parse(data);
    }
    return {
        streakDays: 0,
        totalFocusTime: 0,
        completedTasksToday: 0,
        lastActiveDate: null
    };
}

// 保存里程碑数据
function saveMilestoneData(data) {
    localStorage.setItem('milestoneData', JSON.stringify(data));
}

// 加载里程碑数据
function loadMilestoneData() {
    const data = getMilestoneData();
    const today = new Date().toDateString();
    
    // 更新连续天数
    if (data.lastActiveDate !== today) {
        if (data.lastActiveDate) {
            const lastDate = new Date(data.lastActiveDate);
            const currentDate = new Date(today);
            const diffTime = Math.abs(currentDate - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                data.streakDays += 1;
            } else if (diffDays > 1) {
                data.streakDays = 1;
            }
        } else {
            data.streakDays = 1;
        }
        
        data.lastActiveDate = today;
        data.completedTasksToday = 0;
        saveMilestoneData(data);
    }
    
    // 更新显示
    document.getElementById('streak-days').textContent = data.streakDays;
    
    const totalHours = Math.floor(data.totalFocusTime / 3600000);
    document.getElementById('total-time').textContent = `${totalHours}小时`;
    
    document.getElementById('completed-tasks').textContent = data.completedTasksToday;
}

// 获取留言数据
function getMessages() {
    const messages = localStorage.getItem('messages');
    return messages ? JSON.parse(messages) : [];
}

// 页面加载完成后初始化
window.onload = function() {
    init();
    loadTimerData();
};