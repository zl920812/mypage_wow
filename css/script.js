$(document).ready(function() {
    // 获取 JSON 数据
    $.getJSON("data/classes.json", function(data) {
        let classesContainer = $("#classes-container");

        data.forEach(function(classData) {
            let buttonContainer = $("<div>")
                .addClass("heroic-container");
            let button = $("<button>")
                .addClass("button")
                .addClass(classData.name.toLowerCase().replace(/\s/g, '-')) // 根据职业英文名称添加类名
                .css("background-image", `url(data/logo/${classData.name}/class.jpg)`) // 设置背景图像
                .data("specializations", { spec: classData.spec, cn_spec: classData.cn_spec, name: classData.name, en_name: classData.name, heroic: classData.heroic })
                .click(function() {
                    // 清空 talents-container 内容
                    $("#talents-container").empty();
                    displaySpecializations($(this).data("specializations"));
                });
            let text = $("<span>")
                .addClass("class-text")
                .text(classData.cn_name); // 使用中文名称

            buttonContainer.append(button).append(text);
            classesContainer.append(buttonContainer);
        });
    });
});
