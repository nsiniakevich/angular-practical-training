$.widget('angularPracticalTraining.userList', {
    _users: [],
    options: {
        selectedUsers: []
    },
    _create: function() {
        var widgetInstance = this;
        $.ajax({url: "/data/users.json"}).done(function(data) {
            widgetInstance._users = data;

            widgetInstance._initWidget();
        });
    },
    _setOption: function(key, value) {
        this._super(key, value);
        if (key === "selectedUsers") {
            this._updateCheckboxesOnSelectedUsers();
        }
    },


    _initWidget: function() {
        var widgetInstance = this;
        this._users.forEach(function(user) {
            widgetInstance.element
                    .append('<div>')
                        .append('<input type="checkbox" value="' + user.id + '">')
                        .append('<span>' + user.name + '</span>')
                    .append('</div>');
        });

        if (this.options.selectedUsers.length > 0) {
            this._updateCheckboxesOnSelectedUsers();
        }
        this._addCheckboxEventClickHandler();
    },
    _updateCheckboxesOnSelectedUsers: function() {
        var widgetInstance = this;
        this.options.selectedUsers.forEach(function(user) {
            var $checkbox = widgetInstance.element.find(':input[value="' + user.id + '"]');
            if ($checkbox) {
                $checkbox.prop('checked', true);
            }
        });
    },
    _addCheckboxEventClickHandler: function() {
        var widgetInstance = this;
        this.element.find(':checkbox').change(function() {
            var $checkbox = $(this);
            if($checkbox.is(":checked")) {
                widgetInstance.options.selectedUsers.push(widgetInstance._users.filter(function(user) {
                    return user.id == $checkbox.val();
                })[0]);
            } else {
                widgetInstance.options.selectedUsers = widgetInstance.options.selectedUsers.filter(function(user) {
                    return user.id != $checkbox.val();
                });
            }
            widgetInstance._trigger("onSelectedUsersChange", null, {
                selectedUsers: widgetInstance.options.selectedUsers
            });
        });
    }
});