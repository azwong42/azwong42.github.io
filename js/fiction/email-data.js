export function getSeconds() {
    return parseInt(sessionStorage.getItem('seconds') ?? '0');
}

export function incrementSeconds() {
    sessionStorage.setItem('seconds', (getSeconds() + 1).toString());
}

export function getSentEmails() {
    return parseInt(sessionStorage.getItem('sentEmails') ?? '0');
}

export function incrementSentEmails() {
    sessionStorage.setItem('sentEmails', (getSentEmails() + 1).toString());
}

export function getRepeatableReceipts() {
    return parseInt(sessionStorage.getItem('repeatableReceipts') ?? '0');
}

export function incrementRepeatableReceipts() {
    sessionStorage.setItem('repeatableReceipts', (getRepeatableReceipts() + 1).toString());
}

export function loadEmails(mailbox) {
    return loadDataOrDefault(mailbox);
}

export function saveEmails(mailbox, emails) {
    sessionStorage.setItem(mailbox, JSON.stringify(emails));
}

export function loadCalendarEvents() {
    return loadDataOrDefault('events');
}

export function loadTodo() {
    return loadDataOrDefault('todo');
}

export function saveTodo(todo) {
    sessionStorage.setItem('todo', JSON.stringify(todo));
}

export function getAccess() {
    return sessionStorage.getItem('password') === '06-21-2019';
}

export function enterPassword(password) {
    sessionStorage.setItem('password', password);
}

export function loadAchievements() {
    return loadDataOrDefault('achievements');
}

export function earnAchievement(id) {
    const achievements = loadAchievements();
    achievements.filter((a) => a.id === id)[0].earned = true;
    sessionStorage.setItem('achievements', JSON.stringify(achievements));
}

export function resetDay() {
    sessionStorage.removeItem('inbox');
    sessionStorage.removeItem('drafts');
    sessionStorage.removeItem('sent');
    sessionStorage.removeItem('junk');
    sessionStorage.removeItem('todo');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('seconds');
    sessionStorage.removeItem('sentEmails');
    sessionStorage.removeItem('repeatableReceipts');
    sessionStorage.removeItem('toReceive');
}

export function resetAchievements() {
    sessionStorage.removeItem('achievements');
}

export function clearData() {
    sessionStorage.clear();
}

function loadDataOrDefault(storageItem) {
    const fromStorage = sessionStorage.getItem(storageItem);
    if (fromStorage === undefined || fromStorage === null) {
        return defaultData[storageItem];
    }
    return JSON.parse(fromStorage);
}

const defaultData = {
    inbox: [
        {
            id: 25,
            subject: 'checking in?',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-12-2043 10:12 AM',
            content: 'hey alice, my last couple emails have gone unreplied, and I didn\'t see you at the weekly meeting ' +
                'today, so I went ahead and checked the nexus logs. Imagine my surprise when I found you\'ve been ' +
                'getting productivity notices for six days! your interview was so promising, and we really don\'t ' +
                'want to lose an employee as valuable as you—is there something wrong? let me know if so.' +
                '<br><br>' +
                '-Stephen',
            read: false,
            flagged: false
        },
        {
            id: 24,
            subject: '⚠️ Productivity Notice',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-11-2043 11:07 AM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that it\'s been <b>six</b> workdays since you last completed a TODO list task. ' +
                'We value our employeees here very much, but we also expect a certain level of productivity from ' +
                'the United Astronautics team. If you\'re having issues completing your tasks, contact your supervisor ' +
                'and ask for help! There\'s no shame in getting assistance if you\'re stuck.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 23,
            subject: 'cryopod update',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-10-2043 1:32 PM',
            content: 'hey alice! haven\'t heard from you in a bit, but I trust you\'ve been working hard. word from ' +
                'corporate is that we need to fix the cryopod issue on our end as best we can. maybe you can look into ' +
                'the de-icing module and see if it can stave off the cold in the processor region, or try overclocking ' +
                'a processor or two to help generate heat.' +
                '<br><br>' +
                '-Stephen',
            read: false,
            flagged: false
        },
        {
            id: 22,
            subject: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-10-2043 1:05 PM',
            content: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: self explanatory<br>' +
                'TAGS: investor-block, customer-block<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>No idea why this is happening. Test pods #3 and #7 are set up to test this issue.</li>' +
                    '<li>As far as I can tell, this is because the processors are placed too close to the rest of the '+
                    'pod, and sometimes get too cold to continue operating. Not a code issue.</li>' +
                    '<li>We need this done, and the cryosleep pod configuration is locked. We\'ve produced too many ' +
                    'of them to change it now.</li>' +
                    '</ul><br>' +
                '<b>User:ksumter UPDATED:</b> Added new comment<br>' +
                '<b>User:ksumter UPDATED:</b> Changed `status:wont-fix` to `status:in-progress`<br>',
            read: false,
            flagged: false
        },
        {
            id: 21,
            subject: '⚠️ Productivity Notice',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-10-2043 11:07 AM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that it\'s been <b>five</b> workdays since you last completed a TODO list task. ' +
                'We value our employeees here very much, but we also expect a certain level of productivity from ' +
                'the United Astronautics team. If you\'re having issues completing your tasks, contact your supervisor ' +
                'and ask for help! There\'s no shame in getting assistance if you\'re stuck.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 20,
            subject: '⚠️ Productivity Notice',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-09-2043 11:07 AM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that it\'s been <b>four</b> workdays since you last completed a TODO list task. ' +
                'We value our employeees here very much, but we also expect a certain level of productivity from ' +
                'the United Astronautics team. If you\'re having issues completing your tasks, contact your supervisor ' +
                'and ask for help! There\'s no shame in getting assistance if you\'re stuck.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 19,
            subject: '⚠️ Productivity Notice',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-08-2043 11:07 AM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that it\'s been <b>three</b> workdays since you last completed a TODO list task. ' +
                'We value our employeees here very much, but we also expect a certain level of productivity from ' +
                'the United Astronautics team. If you\'re having issues completing your tasks, contact your supervisor ' +
                'and ask for help! There\'s no shame in getting assistance if you\'re stuck.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 18,
            subject: '[EXT] You good?',
            sender: 'Evelyn Howe &lt;evelyn.howe.13@vantage.com&gt;',
            datetime: '06-08-2043 10:04 AM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                'Hey! You sent that resignation email yet? Big corporate buildings always give me the creeps, ' +
                'I\'m ready to get out of here' +
                '<br><br>' +
                '-E',
            read: false,
            flagged: false
        },
        {
            id: 17,
            subject: 'Your Account Has Been Locked',
            sender: 'United Astronautics Operations Security &lt;opsec@unitedastro.com&gt;',
            datetime: '06-08-2043 10:02 AM',
            content: 'Hello Alice Huang:' +
                '<br><br>' +
                'As your account has been found to be in violation of United Astronautics operations security policies ' +
                'for 36 consecutive hours, it has now been locked. Please re-enter your account using your master ' +
                'password to regain partial access. Then, IMMEDIATELY complete the relevant security tasks in your TODO ' +
                'list. and contact us IN-PERSON at Operations Security to regain full access to your account.' +
                '<br><br>' +
                'Regards,<br>' +
                'United Astronautics Operations Security',
            read: false,
            flagged: true
        },
        {
            id: 16,
            subject: '❗ Received Important Email',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-06-2043 10:02 PM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that you\'ve received an email with the word "security" in the title. ' +
                'That probably means it\'s really important, so I\'m flagging it for you and sending this second ' +
                'email so you get an extra notification!' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 15,
            subject: 'security issues',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-06-2043 10:02 PM',
            content: 'hey alice, I know it\'s a saturday, but opsec has just informed me that your employee account' +
                'has a couple security issues. They\'ve assigned some tasks to your todo list, to be completed ' +
                'immediately. If they aren\'t finished within 36 hours, your account will be locked and they said ' +
                'that "the action will be recorded". whatever that means.' +
                '<br><br>' +
                '-Stephen',
            read: false,
            flagged: true
        },
        {
            id: 14,
            subject: 'RE: Unassigning from Issues in FlexPoint',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-05-2043 4:53 PM',
            content: 'hey alice! as far as I know, that isn\'t possible. we\'ll get our code testers to confirm what ' +
                'you\'ve found, but the execs have final say on whether we get to close the issue without fixing.' +
                '<div class="reply">' +
                    '<div class="reply-time">On 06-05-2043 at 3:34 PM, Alice Huang wrote:</div>' +
                    'Hi Stephen,' +
                    '<br><br>' +
                    'On my latest cryosleep pod issue, I noted that the issue isn\'t a software problem and set the ' +
                    'status to `wont-fix`. But FlexPoint won\'t let me unassign myself from the issue, so it\'s still ' +
                    'showing up in my TODO. Is that something you can do for me?' +
                    '<br><br>' +
                    'Thanks,' +
                    '<br>' +
                    'Alice' +
                '</div>',
            read: true,
            flagged: false
        },
        {
            id: 13,
            subject: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-05-2043 3:30 PM',
            content: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: self explanatory<br>' +
                'TAGS: investor-block, customer-block<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>No idea why this is happening. Test pods #3 and #7 are set up to test this issue.</li>' +
                    '<li>As far as I can tell, this is because the processors are placed too close to the rest of the '+
                    'pod, and sometimes get too cold to continue operating. Not a code issue.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Added new comment<br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:in-progress` to `status:wont-fix<br>',
            read: true,
            flagged: false
        },
        {
            id: 12,
            subject: '⚠️ Productivity Notice',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-05-2043 11:07 AM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that it\'s been <b>two</b> workdays since you last completed a TODO list task. ' +
                'We value our employeees here very much, but we also expect a certain level of productivity from ' +
                'the United Astronautics team. If you\'re having issues completing your tasks, contact your supervisor ' +
                'and ask for help! There\'s no shame in getting assistance if you\'re stuck.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: true,
            flagged: false
        },
        {
            id: 11,
            subject: 'weekly meeting reminder',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-05-2043 9:46 AM',
            content: 'hey alice, just a quick reminder about our weekly friday meeting, starting in 15 minutes over dart' +
                '<br><br>' +
                '-Stephen',
            read: true,
            flagged: false
        },
        {
            id: 10,
            subject: '[EXT] Dinner invite!!',
            sender: 'Evelyn Howe &lt;evelyn.howe.13@vantage.com&gt;',
            datetime: '06-03-2043 1:04 PM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                'Hey hey, congrats on the shiny new mailbox! (And also the job!!) Feels like I haven\'t seen you in ' +
                'forever--dinner on friday? We can celebrate your first week at work!' +
                '<br><br>' +
                '-E',
            read: true,
            flagged: true
        },
        {
            id: 9,
            subject: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-03-2043 1:04 PM',
            content: 'UPDATED ISSUE: #4834 Cryosleep icing occasionally hangs about halfway through<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: self explanatory<br>' +
                'TAGS: investor-block, customer-block<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>No idea why this is happening. Test pods #3 and #7 are set up to test this issue.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Changed `assigned-to:none` to `assigned-to:ahuang`<br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:not-started` to `status:in-progress`',
            read: true,
            flagged: false
        },
        {
            id: 8,
            subject: 'COMPLETED ISSUE: #4742 Setting cryosleep length to negative numbers fails to start the icing process',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-03-2043 11:07 AM',
            content: 'COMPLETED ISSUE: #4742 Setting cryosleep length to negative numbers fails to start the icing process<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: Negative cryosleep length shuts and seals the pod but does not ice the occupant<br>' +
                'TAGS: customer-block<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>We can just reject negative inputs with an error, but ideally the interface should be ' +
                    'altered to prevent them entirely.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:in-progress` to `status:complete`',
            read: true,
            flagged: false
        },
        {
            id: 7,
            subject: 'RE: Cryosleep Pod Code Issues',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-02-2043 5:00 PM',
            content: 'Hello, Alice! I noticed that Stephen didn\'t respond to your email before end-of-day, so I\'m ' +
                'taking the liberty of doing it for him.' +
                '<br><br>' +
                'The alleged issue you\'re describing is standard practice. All software that United Astronautics ' +
                'creates is proprietary, but as a result of the U.S. government\'s ban on noncompetes in our sector, ' +
                'we are forced to take more drastic measures to prevent the spread of our code to competing agencies. ' +
                'Once such measure is obfuscating our code at the developer level, but not to worry, it all still ' +
                'runs the same!' +
                '<div class="reply">' +
                '<div class="reply-time">On 06-02-2043 at 3:13 PM, Alice Huang wrote:</div>' +
                    'Hi Stephen,' +
                    '<br><br>' +
                    'I decided to take a look at the Cryosleep pod for my first issue, since it was high-priority and ' +
                    'seemed important. It seemed to me that the code there is pretty convoluted—lots of obscured ' +
                    'variable names, unnecessary one-liners, etc. The infinite loop mentioned in the issue was the ' +
                    'result of a completely extraneous recursion, which I removed with no side effects. Is this maybe ' +
                    'something we want to look into fixing as we look deeper into the Cryosleep pod code? It seems ' +
                    'likely to me that there are other less obvious bugs lurking in there somewhere.' +
                    '<br><br>' +
                    'Thanks,' +
                    '<br>' +
                    'Alice' +
                '</div>',
            read: true,
            flagged: false
        },
        {
            id: 6,
            subject: 'UPDATED ISSUE: #4742 Setting cryosleep length to negative numbers fails to start the icing process',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-03-2043 9:02 AM',
            content: 'UPDATED ISSUE: #4742 Setting cryosleep length to negative numbers fails to start the icing process<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: Negative cryosleep length shuts and seals the pod but does not ice the occupant<br>' +
                'TAGS: customer-block<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>We can just reject negative inputs with an error, but ideally the interface should be ' +
                    'altered to prevent them entirely.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Changed `assigned-to:none` to `assigned-to:ahuang`<br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:not-started` to `status:in-progress`',
            read: true,
            flagged: false
        },
        {
            id: 5,
            subject: 'COMPLETED ISSUE: #4833 Cryosleep pods occasionally get stuck in an infinite loop upon de-icing',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-02-2043 2:54 PM',
            content: 'COMPLETED ISSUE: #483 Cryosleep pods occasionally get stuck in an infinite loop upon de-icing<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: self explanatory<br>' +
                'TAGS: investor-block, customer-block, easy-fix<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>This is a MAJOR issue that several of our most important customers (US government, UK ' +
                    'government, Bezos + friends) are waiting on. We do NOT want them to take their business elsewhere - ' +
                    'fix immediately.</li>' +
                    '<li>Should be simple to fix; I think there\'s an errant conditional in the OpenClosePod.cpp. ' +
                    'However, we don\'t have any more active Pod developers, so someone needs to bite the bullet and ' +
                    'download the code module.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:in-progress` to `status:complete`',
            read: true,
            flagged: false
        },
        {
            id: 4,
            subject: 'UPDATED ISSUE: #4833 Cryosleep pods occasionally get stuck in an infinite loop upon de-icing',
            sender: 'FlexPoint &lt;flexpoint-mailer@unitedastro.com&gt;',
            datetime: '06-01-2043 3:11 PM',
            content: 'UPDATED ISSUE: #483 Cryosleep pods occasionally get stuck in an infinite loop upon de-icing<br>' +
                'PRIORITY: HIGH<br>' +
                'DESCRIPTION: self explanatory<br>' +
                'TAGS: investor-block, customer-block, easy-fix<br>' +
                'COMMENTS:' +
                '<ul>' +
                    '<li>This is a MAJOR issue that several of our most important customers (US government, UK ' +
                    'government, Bezos + friends) are waiting on. We do NOT want them to take their business elsewhere - ' +
                    'fix immediately.</li>' +
                    '<li>Should be simple to fix; I think there\'s an errant conditional in the OpenClosePod.cpp. ' +
                    'However, we don\'t have any more active Pod developers, so someone needs to bite the bullet and ' +
                    'download the code module.</li>' +
                '</ul><br>' +
                '<b>User:ahuang UPDATED:</b> Changed `assigned-to:none` to `assigned-to:ahuang`<br>' +
                '<b>User:ahuang UPDATED:</b> Changed `status:not-started` to `status:in-progress`',
            read: true,
            flagged: false
        },
        {
            id: 3,
            subject: '🎉 Your first task completion!',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            datetime: '06-01-2043 3:02 PM',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'I\'m NEXUS, your personal VPA (virtual productivity assistant) here at United Astronautics. We know how ' +
                'valuable our employees are, and we want to make sure you always feel appreciated! As a virtual ' +
                'prodcutivity assistant, I will periodically contact you about tasks you\'ve completed, or that you ' +
                'have left to complete, performance reviews, meetings, and team social events. If you need any of my ' +
                'settings adjusted, DO NOT reply to this email. Instead, reach out to your IT department, and they\'ll ' +
                'get it touch with me for you. For now, congratulations on completing your first task: "Set up master ' +
                'password". Your work for UAstro is appreciated!' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: true,
            flagged: false
        },
        {
            id: 2,
            subject: 'first day meeting summary',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-01-2043 2:47 PM',
            content: 'good talking with you, Alice! a quick summary of our meeting points and your action items ' +
                '(which I\'ve also added to your todo list):' +
                '<br>' +
                '<ul>' +
                    '<li>set up master password (this is <b>not</b> for service access, but you\'ll use it in the ' +
                    'event of account lockouts, etc)</li>' +
                    '<li>see Trevor in IT (floor 2) about a work laptop for home work, he\'ll get it set up for you</li>' +
                    '<li>claim a \'easy-fix\' TODO list task & submit the fix</li>' +
                '</ul><br>' +
                'also, don\'t forget about our weekly friday meetings! they\'re more of a social thing, but we want ' +
                '<i>everyone</i> to attend. it\'s a great way to get to know your new team!' +
                '<br><br>' +
                'we also have meetings on ' +
                'the other weekdays for each of our subteams, but you\'ll only have to attend the meeting for the ' +
                'team you\'re on. for you, that\'s the cryosleep pod, and you\'re the only member, so really you don\'t ' +
                'have to go to any of them at all.' +
                '<br><br>' +
                '-Stephen',
            read: true,
            flagged: false
        },
        {
            id: 1,
            subject: 'RE: RE: first day',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-01-2043 10:13 AM',
            content: 'wonderful! I\'ve sent a link to your calendar' +
                '<div class="reply">' +
                '<div class="reply-time">On 06-01-2043 at 9:35 AM, Alice Huang wrote:</div>' +
                    'Hi Stephen,' +
                    '<br><br>' +
                    '1pm works for me! Talk to you then.' +
                    '<br><br>' +
                    'Thanks,' +
                    '<br>' +
                    'Alice' +
                    '<div class="reply">' +
                        '<div class="reply-time">On 06-01-2043 at 9:32 AM, Stephen Quell wrote:</div>' +
                        'Hey Alice, welcome to UA! You\'ll be getting an email from HR about onboarding, but there\'s ' +
                        'a bunch of stuff re: the position you\'re in that they don\'t cover. ' +
                        'Let\'s set a meeting time to chat and get you set up, say 1:00 over Dart?' +
                        '<br><br>' +
                        '-Stephen' +
                    '</div>' +
                '</div>',
            read: true,
            flagged: false
        },
        {
            id: 0,
            subject: 'Welcome to United Astronautics! 😊',
            sender: 'United Astronautics HR &lt;hr@unitedastro.com&gt;',
            datetime: '06-01-2043 9:04 AM',
            content: 'Dear ALICE HUANG,<br><br>Welcome to the United Astronautics family! We\'re so glad to have you ' +
                'on board. In order to ensure that your employee onboarding goes smoothly, we have left a list of tasks ' +
                'on your physical desk. (Archaic, we know!) Complete these tasks before noon TODAY and report to the HR office (on ' +
                'the 3rd floor) for further instructions. Congratulations on your new employment!<br><br>-United ' +
                'Astronautics HR Department',
            read: true,
            flagged: false
        },
    ],
    drafts: [
        {
            id: 0,
            subject: 'Resignation Notice',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: 'Last edited 06-08-2043 10:02 AM',
            content: 'Hi Stephen,' +
                '<br><br>' +
                'I am writing to formally tender my resignation as a software developer for United Astronautics, Ltd. ' +
                'Over the course of the past week, I have come to discover that the company does not in fact hold the ' +
                'values I thought it did upon accepting your offer of employment. This corpration is a senseless, corrupt',
            read: true,
            flagged: false
        },
    ],
    sent: [
        {
            id: 6,
            subject: 'Concerns from the Weekly Meeting',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-05-2043 11:09 AM',
            content: 'Hi Stephen,' +
                '<br><br>' +
                'Some of the topics brought up at the weekly meeting (timeline pressure, developer turnover, etc.) ' +
                'sounded a little concerning to me, especially given that they weren\'t mentioned during my ' +
                'interview process. Do you think we could set up a meeting sometime to discuss?' +
                '<br><br>' +
                'Thanks,' +
                '<br>' +
                'Alice',
            read: true,
            flagged: false
        },
        {
            id: 5,
            subject: 'RE: [EXT] Dinner invite!!',
            recipient: 'Evelyn Howe &lt;evelyn.howe.13@vantage.com&gt;',
            datetime: '06-03-2043 1:07 PM',
            content: 'Yes, absolutely!! 6pm, I assume.' +
                '<br><br>' +
                '-A' +
                '<div class="reply">' +
                    '<div class="reply-time">On 06-03-2043 at 1:04 PM, Evelyn Howe wrote:</div>' +
                    '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                    '<br><br>' +
                    'Hey hey, congrats on the shiny new mailbox! (And also the job!!) Feels like I haven\'t seen you in ' +
                    'forever--dinner on friday? We can celebrate your first week at work!' +
                    '<br><br>' +
                    '-E' +
                '</div>',
            read: true,
            flagged: false
        },
        {
            id: 4,
            subject: 'Unassigning from Issues in FlexPoint',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-05-2043 3:34 PM',
            content: 'Hi Stephen,' +
                '<br><br>' +
                'On my latest cryosleep pod issue, I noted that the issue isn\'t a software problem and set the ' +
                'status to `wont-fix`. But FlexPoint won\'t let me unassign myself from the issue, so it\'s still ' +
                'showing up in my TODO. Is that something you can do for me?' +
                '<br><br>' +
                'Thanks,' +
                '<br>' +
                'Alice',
            read: true,
            flagged: false
        },
        {
            id: 3,
            subject: 'NEXUS Auto-Reply',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-02-2043 3:13 PM',
            content: 'Hi Stephen,' +
                '<br><br>' +
                'I tried to send you an email last night about some code issues in the cryosleep pod project, but ' +
                'NEXUS replied on your behalf with a kind of non-answer that I\'m still unsure about. Do you still ' +
                'recieve the emails that NEXUS takes care of? For reference, my question was about the convoluted ' +
                'code in the cryosleep files.' +
                '<br><br>' +
                'Thanks,' +
                '<br>' +
                'Alice',
            read: true,
            flagged: false
        },
        {
            id: 2,
            subject: 'Cryosleep Pod Code Issues',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: '06-02-2043 3:13 PM',
            content: 'Hi Stephen,' +
                '<br><br>' +
                'I decided to take a look at the Cryosleep pod for my first issue, since it was high-priority and ' +
                'seemed important. It seemed to me that the code there is pretty convoluted—lots of obscured ' +
                'variable names, unnecessary one-liners, etc. The infinite loop mentioned in the issue was the ' +
                'result of a completely extraneous recursion, which I removed with no side effects. Is this maybe ' +
                'something we want to look into fixing as we look deeper into the Cryosleep pod code? It seems ' +
                'likely to me that there are other less obvious bugs lurking in there somewhere.' +
                '<br><br>' +
                'Thanks,' +
                '<br>' +
                'Alice',
            read: true,
            flagged: false
        },
        {
            id: 1,
            subject: 'HR Office Location?',
            recipient: 'United Astronautics HR &lt;hr@unitedastro.com&gt;',
            datetime: '06-01-2043 11:43 AM',
            content: 'Hi,' +
                '<br><br>' +
                'I\'ve completed the onboarding tasks as specified, but I can\'t seem to find the HR office.' +
                'Could you provide me with an office number or similar?' +
                '<br><br>' +
                'Thanks,<br>' +
                'Alice',
            read: true,
            flagged: false
        },
        {
            id: 0,
            subject: 'RE: first day',
            recipient: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            datetime: 'Last edited 06-01-2043 9:35 AM',
            content:  'Hi Stephen,' +
                '<br><br>' +
                '1pm works for me! Talk to you then.' +
                '<br><br>' +
                'Thanks,' +
                '<br>' +
                'Alice' +
                '<div class="reply">' +
                    '<div class="reply-time">On 06-01-2043 at 9:32 AM, Stephen Quell wrote:</div>' +
                    'Hey Alice, welcome to UA! You\'ll be getting an email from HR about onboarding, but there\'s ' +
                    'a bunch of stuff re: the position you\'re in that they don\'t cover. ' +
                    'Let\'s set a meeting time to chat and get you set up, say 1:00 over Dart?' +
                    '<br><br>' +
                    '-Stephen' +
                '</div>',
            read: true,
            flagged: false
        },
    ],
    junk: [
        {
            id: 904,
            subject: '[EXT] NYT Weekly News Digest 6/10',
            sender: 'The New York Times &lt;no-reply@nytimes.com&gt;',
            datetime: '06-10-2043 12:02 PM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                '[banner.png]<br>' +
                '[image-june-10.png]<br><br>' +
                'Top stories this week: Modern space race continues as United Astronautics buckles down on cryopod ' +
                'safety; Disease strikes wheat crop in the American Midwest; The 2044 presidential election: who you ' +
                'should vote for.' +
                '<br><br>' +
                'Read more at ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://nytimes.com\')">https://nytimes.com/</span>.',
            read: false,
            flagged: false
        },
        {
            id: 903,
            subject: '[EXT] Your Application',
            sender: 'National Park Service &lt;applications@nps.gov&gt;',
            datetime: '06-07-2043 5:07 PM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                'Hi Ms. Huang,' +
                '<br><br>' +
                'We\'re writing to let you know that we\'ve reviewed your application, and we would love to see you ' +
                'for an interview! Please indicate the times you are available on our ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://nps.gov\')">application portal</span>. We ' +
                'look forward to hearing from you!' +
                '<br><br>' +
                'Regards,<br>' +
                'The National Park Service Team',
            read: false,
            flagged: false
        },
        {
            id: 902,
            subject: '[EXT] NYT Weekly News Digest 6/3',
            sender: 'The New York Times &lt;no-reply@nytimes.com&gt;',
            datetime: '06-03-2043 12:03 PM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                '[banner.png]<br>' +
                '[image-june-3.png]<br><br>' +
                'Top stories this week: Global temperatures reach record high for June; Amazon Industries to donate ' +
                '$20B to NASA space travel initiatives; Grand Teton National Park welcomes its final summer visitor season.' +
                '<br><br>' +
                'Read more at ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://nytimes.com\')">https://nytimes.com/</span>.',
            read: false,
            flagged: false
        },
        {
            id: 901,
            subject: '[EXT] May Celebrations!',
            sender: 'Kevin Sumter &lt;ksum66@vantage.com&gt;',
            datetime: '06-01-2043 2:11 PM',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                'Hi Team! To celebrate our new hires and a very successful month of May, everyone at UA is ' +
                'invited to a celebration potluck this Saturday! BYOB',
            read: false,
            flagged: false
        },
    ],
    toReceive: [
        {
            id: 1001,
            subject: '✅ Productivity Realignment',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'Thank you for making it back on track and once again completing your tasks as requested! You did ' +
                'not go 7 days without a task completion, so no formal infraction warning has been issued and you ' +
                'will not be asked to rescind access to your account. Your supervisor (Stephen Quell) has been ' +
                'informed of your realignment.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 1002,
            subject: '❗ Productivity Warning: Notice of Infraction',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'As it has been <b>seven</b> workdays since you last completed a TODO list task, we at United Astronautics ' +
                'have no choice but to issue a formal Productivity Infraction. This has been marked on your company ' +
                'record, which is PERMAANENT and cannot be altered. Reminder: three Productivity Infractions within a two-year ' +
                'period <i>will</i> result in immediate termination of your account.' +
                '<br><br>' +
                'If your productivity infractions are due to a desire to no longer access your account, please save our ' +
                'Operations Security team from the trouble of having to remove your access manually. <b>LOG OUT OF YOUR ' +
                'ACCOUNT</b> using the ID menu in the upper right corner of your screen, and they will be informed.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 1003,
            subject: '[EXT] NYT BREAKING: SAN ANDREAS FAULT SLIP',
            sender: 'The New York Times &lt;no-reply@nytimes.com&gt;',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                '[banner.png]<br>' +
                '[image-california.png]<br><br>' +
                'BREAKING NEWS: Major earthquake shakes southern California as the San Andreas Fault slips, multiple ' +
                'counties issue fire and hazardous air warnings.' +
                '<br><br>' +
                'Read more at ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://nytimes.com\')">https://nytimes.com/</span>.',
            read: false,
            flagged: false,
            junk: true,
        },
        {
            id: 1004,
            subject: 'task completions',
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            content: 'hey alice, I saw you\'d finished the tasks in your list. before you get back to the cryopod ' +
                'stuff, I added a couple more that I need done pretty urgently. thanks!' +
                '<br><br>' +
                '-Stephen',
            read: false,
            flagged: false
        },
        {
            id: 1005,
            sender: 'Evelyn Howe &lt;evelyn.howe.13@vantage.com&gt;',
            content: '<b>WARNING: This message contains content from a sender outside your organization.</b>' +
                '<br><br>' +
                'I don\'t know how you got access to this email, but this isn\'t funny. Log out of the account ' +
                'immediately--Alice says the button should be in the upper right, in the little menu. Then leave us ' +
                'alone. We\'re done with this piece of shit company, and yes, you can quote me <i>and</i> Alice on that.',
            read: false,
            flagged: false
        },
        {
            id: 1006,
            sender: 'Stephen Quell &lt;squell@unitedastro.com&gt;',
            content: 'hey alice—I know these first couple days have been a little rough, but onboarding is not an easy ' +
                'process, and we need you to respect that. this notice is completely unprofessional and utterly ' +
                'unacceptable. you\'ll be hearing from hr. in the meantime, do us all a favor and log out of your ' +
                'account before they reach your desk.' +
                '<br><br>' +
                '-Stephen',
            read: false,
            flagged: false
        },
        {
            id: 1007,
            subject: '🎉 Sticking With It!',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'I noticed that you\'ve just deleted a draft email that would have tendered your resignation from ' +
                'United Astronautics. On behalf of the company, I just wanted to say congratulations! We\'re so glad ' +
                'you\'re sticking with it!' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 10008,
            subject: '❓ Incorrectly Flagged Email',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'I noticed that you\'ve just flagged a junk email as important! The junk filters here at United ' +
                'Astronautics are extremely sophisticated, so the only conclusion must be that you\'re using your ' +
                'work hours on trivial non-work tasks. Please return to your TODO list!' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 20009,
            subject: '⚠️ Unable to Help',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'Unfortunately, I am unable to help with your request, as all communication with me must be directed ' +
                'through your wonderful IT team. Have a nice day!' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
        {
            id: 30010,
            subject: '❗ Received Help Request',
            sender: 'NEXUS &lt;no-reply-nexus+o3i7gtd0uj549k@unitedastro.com&gt;',
            content: 'Hello, Alice!' +
                '<br><br>' +
                'It\'s me, NEXUS! I noticed that you\'ve received an email with the word "help" in the title. ' +
                'That probably means it\'s important (somebody needs your assistance!), so I\'m sending this second ' +
                'email so you get an extra notification.' +
                '<br><br>' +
                'Please note that if you are experiencing higher than expected email volume, you can take one quick ' +
                '(less than ten minutes!) break per workday. Just make sure to log out before you go, for security ' +
                'purposes. You can find the button in the ID card menu in the upper right.' +
                '<br><br>' +
                'Sincerely,<br>' +
                'NEXUS, Your Personal VPA' +
                '<div class="disclaimer">NEXUS&trade; VPA is a proprietary product of NEXUS&trade; Technologies, Ltd. ' +
                'and may not be copied, distributed, or activated without proper licencing permission. Users of the ' +
                'NEXUS&trade; VPA agree to have their task and productivity data anonymously collated and analyzed ' +
                'for improvements to the NEXUS&trade; VPA. NEXUS&trade; Technologies, Ltd. uses conglomerate data ' +
                'to train its machine learning models, and as such is not responsible for any inaccuracies, ' +
                'social faux pas, or potential biases that may exist in the NEXUS&trade; VPA product.</div>',
            read: false,
            flagged: false
        },
    ],
    events: [
        {
            id: 22,
            year: 2043,
            month: 5,
            day: 21,
            start: 18,
            duration: 5,
            title: 'Celebration',
            external: true,
            description: 'This event is from an external Vantage calendar: alice2019huang.<br><br>For Evelyn - happy 24th!!'
        },
        {
            id: 21,
            year: 2043,
            month: 5,
            day: 5,
            start: 18,
            duration: 2,
            title: 'Dinner',
            external: true,
            description: 'This event is from an external Vantage calendar: alice2019huang.<br><br>With Evelyn - new job "celebration"'
        },
        {
            id: 20,
            year: 2043,
            month: 5,
            day: 25,
            start: 13,
            duration: 1,
            title: 'Dev Team - Life Support Meeting',
            description: 'Dev Team - Life Support Meeting'
        },
        {
            id: 19,
            year: 2043,
            month: 5,
            day: 18,
            start: 13,
            duration: 1,
            title: 'Dev Team - Life Support Meeting',
            description: 'Dev Team - Life Support Meeting'
        },
        {
            id: 18,
            year: 2043,
            month: 5,
            day: 11,
            start: 13,
            duration: 1,
            title: 'Dev Team - Life Support Meeting',
            description: 'Dev Team - Life Support Meeting'
        },
        {
            id: 17,
            year: 2043,
            month: 5,
            day: 4,
            start: 13,
            duration: 1,
            title: 'Dev Team - Life Support Meeting',
            description: 'Dev Team - Life Support Meeting'
        },
        {
            id: 16,
            year: 2043,
            month: 5,
            day: 31,
            start: 13,
            duration: 1,
            title: 'Dev Team - Cryosleep Pod Meeting',
            description: 'Dev Team - Cryosleep Pod Meeting'
        },
        {
            id: 15,
            year: 2043,
            month: 5,
            day: 24,
            start: 13,
            duration: 1,
            title: 'Dev Team - Cryosleep Pod Meeting',
            description: 'Dev Team - Cryosleep Pod Meeting'
        },
        {
            id: 14,
            year: 2043,
            month: 5,
            day: 17,
            start: 13,
            duration: 1,
            title: 'Dev Team - Cryosleep Pod Meeting',
            description: 'Dev Team - Cryosleep Pod Meeting'
        },
        {
            id: 13,
            year: 2043,
            month: 5,
            day: 10,
            start: 13,
            duration: 1,
            title: 'Dev Team - Cryosleep Pod Meeting',
            description: 'Dev Team - Cryosleep Pod Meeting'
        },
        {
            id: 12,
            year: 2043,
            month: 5,
            day: 3,
            start: 13,
            duration: 1,
            title: 'Dev Team - Cryosleep Pod Meeting',
            description: 'Dev Team - Cryosleep Pod Meeting'
        },
        {
            id: 11,
            year: 2043,
            month: 5,
            day: 30,
            start: 13,
            duration: 1,
            title: 'Dev Team - Navigation & Guidance Meeting',
            description: 'Dev Team - Navigation & Guidance Meeting'
        },
        {
            id: 10,
            year: 2043,
            month: 5,
            day: 23,
            start: 13,
            duration: 1,
            title: 'Dev Team - Navigation & Guidance Meeting',
            description: 'Dev Team - Navigation & Guidance Meeting'
        },
        {
            id: 9,
            year: 2043,
            month: 5,
            day: 16,
            start: 13,
            duration: 1,
            title: 'Dev Team - Navigation & Guidance Meeting',
            description: 'Dev Team - Navigation & Guidance Meeting'
        },
        {
            id: 8,
            year: 2043,
            month: 5,
            day: 9,
            start: 13,
            duration: 1,
            title: 'Dev Team - Navigation & Guidance Meeting',
            description: 'Dev Team - Navigation & Guidance Meeting'
        },
        {
            id: 7,
            year: 2043,
            month: 5,
            day: 2,
            start: 13,
            duration: 1,
            title: 'Dev Team - Navigation & Guidance Meeting',
            description: 'Dev Team - Navigation & Guidance Meeting'
        },
        {
            id: 6,
            year: 2043,
            month: 5,
            day: 15,
            start: 9,
            duration: 3,
            title: '2 Week Check-in ALICE HUANG',
            description: '2 Week Check-in ALICE HUANG - report to HR main office (3rd floor) for further instructions.'
        },
        {
            id: 5,
            year: 2043,
            month: 5,
            day: 26,
            start: 10,
            duration: 1,
            title: 'Weekly Meeting',
            description: 'Kevin Sumter is inviting you to a scheduled DART meeting: ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://dartmeet.co.us/\')">' +
                    'https://dartmeet.co.us/invite/da67d5428dce2ef5' +
                '</span>'
        },
        {
            id: 4,
            year: 2043,
            month: 5,
            day: 19,
            start: 10,
            duration: 1,
            title: 'Weekly Meeting',
            description: 'Kevin Sumter is inviting you to a scheduled DART meeting: ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://dartmeet.co.us/\')">' +
                    'https://dartmeet.co.us/invite/da67d5428dce2ef5' +
                '</span>'
        },
        {
            id: 3,
            year: 2043,
            month: 5,
            day: 12,
            start: 10,
            duration: 1,
            title: 'Weekly Meeting',
            description: 'Kevin Sumter is inviting you to a scheduled DART meeting: ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://dartmeet.co.us/\')">' +
                    'https://dartmeet.co.us/invite/da67d5428dce2ef5' +
                '</span>'
        },
        {
            id: 2,
            year: 2043,
            month: 5,
            day: 5,
            start: 10,
            duration: 1,
            title: 'Weekly Meeting',
            description: 'Kevin Sumter is inviting you to a scheduled DART meeting: ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://dartmeet.co.us/\')">' +
                    'https://dartmeet.co.us/invite/da67d5428dce2ef5' +
                '</span>'
        },
        {
            id: 1,
            year: 2043,
            month: 5,
            day: 1,
            start: 13,
            duration: 1,
            title: 'alice intro meeting',
            description: 'Stephen Quell is inviting you to a scheduled DART meeting: ' +
                '<span class="fake-link" onclick="followFakeLink(\'https://dartmeet.co.us/\')">' +
                    'https://dartmeet.co.us/invite/3a91fedf4246e3f4' +
                '</span>'
        },
        {
            id: 0,
            year: 2043,
            month: 5,
            day: 1,
            start: 9,
            duration: 3,
            title: 'Onboarding ALICE HUANG',
            description: 'Onboard ALICE HUANG - complete all tasks in Vantage, then report to HR main office (3rd floor) for further instructions.'
        }
    ],
    todo: [
        {
            id: 0,
            task: 'Change master password. (NOTE TO EMPLOYEE: while it may meet the ten-character password requirement, ' +
                'your best friend\'s birthdate is an extremely insecure and therefore unacceptable master password.)',
            priority: 'high',
            complete: false,
        },
        {
            id: 1,
            task: 'Set up two-factor authentication (NOTE TO EMPLOYEE: it\'s 2043. Get with the program.)',
            priority: 'high',
            complete: false,
        },
        {
            id: 2,
            task: 'FlexPoint Issue #4854 Cryosleep icing occasionally hangs about halfway through',
            priority: 'high',
            complete: false,
        },
        {
            id: 3,
            task: 'FlexPoint Issue #4742 Setting cryosleep length to negative numbers fails to start the icing process',
            priority: 'high',
            complete: true,
        },
        {
            id: 4,
            task: 'FlexPoint Issue #4833 Cryosleep pods occasionally get stuck in an infinite loop upon de-icing',
            priority: 'high',
            complete: true,
        },
        {
            id: 5,
            task: 'See Trevor about work laptop',
            priority: 'med',
            complete: false,
        },
        {
            id: 6,
            task: 'Set up master password',
            priority: 'high',
            complete: true,
        },
    ],
    achievements: [
        {
            id: 0,
            name: 'Touch Grass',
            description: 'Log out of the account.',
            earned: false,
        },
        {
            id: 1,
            name: 'I\'m In',
            description: 'Enter the master password.',
            earned: false,
        },
        {
            id: 3,
            name: 'It\'s the Final Notice',
            description: 'Receive the seventh Productivity Notice.',
            earned: false,
        },
        {
            id: 4,
            name: 'Reading Junkie',
            description: 'Read all of the junk emails.',
            earned: false,
        },
        {
            id: 2,
            name: 'Taskmaster I',
            description: 'Check off a task before the seventh Productivity Notice.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 5,
            name: 'Taskmaster II',
            description: 'Check off all tasks on the TODO list.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 6,
            name: 'Do Not Go Gentle',
            description: 'Send the notice of resignation.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 7,
            name: 'Quelled Feelings',
            description: 'Delete the notice of resignation.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 8,
            name: 'Howe-To',
            description: 'Send an email to Evelyn.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 9,
            name: 'Mixed Message',
            description: 'Mark a junk email as important.',
            earned: false,
            reliesOn: 1,
        },
        {
            id: 10,
            name: 'Artificial Unintelligence',
            description: 'Send an email to the NEXUS VPA.',
            earned: false,
            reliesOn: 1,
        },
    ]
};