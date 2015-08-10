- Implement widget with jquery. For example a modal window which display the file list coming from backend.

	Widget has setValue, getValue, onValueChanged methods as public API. onValueChanged is a callback that called when the used mark/unmark a file from the list as selected (for example checks/uncheches checkbox related to the file).
	
	The file list is something specific for the widget(widget request it from backend, or you can emulate async operation with setTimeout or just hardcode some collection)


- Wrap jquery widget with angularjs directive so that hide all the details of implementation. To demonstrate it create the list of selected files in angularJS controller.

	display this list with ng-repeat and {{}} expression.
	
	Send this list as a list of selected files to directive.
	
	Check that the list of files in modal window and rendererd with ng-repeat is the same.
	
	Check/uncheck several files. Check that the list rendered with ng-repeat is changing as you are selecting/unselecting files in modal window.


- Cover this control with test on jasmine to automate verification mentioned above.