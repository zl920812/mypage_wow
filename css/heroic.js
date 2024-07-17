// 显示英雄天赋选项
function displayHeroicOptions(className, specialization, heroicOptions) {
    let specializationsContainer = $("#specializations-container");
    specializationsContainer.empty(); // 清空容器内的内容

    heroicOptions.forEach(function(heroic) {
        if (heroic.specs.includes(specialization)) {
            let buttonContainer = $("<div>")
                .addClass("heroic-container");

            let button = $("<button>")
                .addClass("heroic-button specialization-button") // 添加specialization-button类以应用相同的样式
                .css("background-image", `url(data/heroic/${className}/${heroic.name}.png)`) // 设置英雄天赋按钮的背景图像
                .click(function() {
                    // 清空 specializations-container 内容
                    specializationsContainer.empty();
                    // 加载天赋数据的逻辑
                    loadTalents(className, specialization, heroic.name);
                });

            let text = $("<span>")
                .addClass("heroic-text")
                .text(heroic.cn_name); // 使用中文名称

            buttonContainer.append(button).append(text);
            specializationsContainer.append(buttonContainer);
        }
    });
}
