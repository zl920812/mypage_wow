// 定义一个变量来存储当前选中的英雄天赋索引
let currentHeroicIndex = 0;

function loadTalents(className, specialization, heroicOptions) {
    let talentsContainer = $("#talents-container");
    talentsContainer.empty();

    // 添加列
    talentsContainer.append(
        '<div class="talent-column class-column"></div>' +
        '<div class="talent-column hero-column"></div>' +
        '<div class="talent-column spec-column"></div>'
    );

    // 确保 heroicOptions 是一个数组
    if (Array.isArray(heroicOptions) && heroicOptions.length > 0) {
        // 只加载当前专精对应的英雄天赋按钮
        let filteredHeroicOptions = heroicOptions.filter(option => option.specs.includes(specialization));

        if (filteredHeroicOptions.length > 0) {
            currentHeroicIndex = 0; // 初始化索引
            loadHeroicButton(className, filteredHeroicOptions[currentHeroicIndex]);

            // 点击事件处理程序，用于切换到下一个英雄天赋
            $(".hero-column").on("click", ".heroic-button", function() {
                // 计算下一个英雄天赋的索引
                currentHeroicIndex = (currentHeroicIndex + 1) % filteredHeroicOptions.length;

                // 加载下一个英雄天赋按钮
                loadHeroicButton(className, filteredHeroicOptions[currentHeroicIndex]);
            });
        } else {
            console.error("No heroic options available for specialization:", specialization);
        }
    } else {
        console.error("Invalid heroic options:", heroicOptions);
    }
}

// 加载英雄天赋按钮
function loadHeroicButton(className, heroicOption) {
    let heroColumn = $(".hero-column");
    heroColumn.empty(); // 清空之前的内容

    let buttonContainer = $("<div>")
        .addClass("heroic-container");
    let heroButton = $("<button>")
        .addClass("heroic-button specialization-button")
        .css("background-image", `url(data/heroic/${className}/${heroicOption.name}.png)`)
        .click(function() {
            // 处理英雄天赋按钮点击事件
            // 可以在这里添加具体逻辑，例如加载天赋数据等
        });

    let text = $("<span>")
        .addClass("class-text")
        .text(heroicOption.cn_name); // 使用中文名称

    heroButton.append(text);
    buttonContainer.append(heroButton);
    heroColumn.append(buttonContainer);
}
