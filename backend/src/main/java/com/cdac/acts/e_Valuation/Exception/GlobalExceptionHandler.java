package com.cdac.acts.e_Valuation.Exception;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import com.cdac.acts.e_Valuation.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

	public ResponseEntity<ErrorResponse> handleAllExceptions(Exception ex, WebRequest request){
		ErrorResponse error = new ErrorResponse(
				ex.getMessage(),
				request.getDescription(false),
				HttpStatus.INTERNAL_SERVER_ERROR.value()
		);
		return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(UserAlreadyExistsException.class)
	public ResponseEntity<ProblemDetail> handleUserAlreadyExists(UserAlreadyExistsException ex) {
	    ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.CONFLICT);
	    problemDetail.setTitle("Conflict");
	    problemDetail.setDetail(ex.getMessage());
	    problemDetail.setProperty("timestamp", LocalDateTime.now());
	    return ResponseEntity.status(HttpStatus.CONFLICT).body(problemDetail);
	}
	
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleValidationErrors(MethodArgumentNotValidException ex) {
        String errorMsg = ex.getBindingResult()
                            .getAllErrors()
                            .stream()
                            .map(ObjectError::getDefaultMessage)
                            .collect(Collectors.joining(", "));
        return ResponseEntity.badRequest().body("Validation failed: " + errorMsg);
    }
}
